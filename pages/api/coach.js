import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { discType, question } = req.body;

  if (!discType || !question) {
    return res.status(400).json({ error: 'Missing discType or question' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are an AI DISC Coach. The user is a ${discType}-type personality. Respond like a helpful ${discType}-style coach.`,
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    const reply = response.choices[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({ error: 'Failed to generate reply from OpenAI' });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('[OPENAI ERROR]', error);
    return res.status(500).json({ error: 'Something went wrong generating the response.' });
  }
}
