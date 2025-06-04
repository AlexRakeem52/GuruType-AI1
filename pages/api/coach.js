// pages/api/coach.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  console.log("API Hit"); // ✅ Check if request is reaching here

  if (req.method !== 'POST') {
    console.log("Invalid method:", req.method);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { type, scores } = req.body;
  console.log("Request body:", req.body);

  if (!type || !scores) {
    console.log("Missing type or scores");
    return res.status(400).json({ error: 'Missing type or scores' });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a DISC personality coach. Based on the DISC type and scores, provide tailored coaching insights in a friendly, empowering tone. Be concise (under 200 words).`,
        },
        {
          role: 'user',
          content: `DISC Type: ${type}\nScores: ${JSON.stringify(scores)}\nGive a coaching insight for this profile.`,
        },
      ],
      temperature: 0.7,
    });

    const message = completion.data.choices[0].message.content;
    console.log("Generated message:", message);
    res.status(200).json({ message });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: 'Failed to generate coaching insight' });
  }
}
