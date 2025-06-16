import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { discType, question } = req.body;

  if (!discType || !question) {
    return res.status(400).json({ error: "Missing discType or question" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a DISC personality AI coach. The user is a ${discType}-type personality. Respond like a helpful, strategic coach who understands DISC behavioral dynamics.`,
        },
        {
          role: "user",
          content: question,
        },
      ],
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error.message, error.response?.data);
    return res.status(500).json({ error: "Something went wrong generating the response." });
  }
}
