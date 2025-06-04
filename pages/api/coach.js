// pages/api/coach.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { type, scores } = req.body;

  if (!type || !scores) {
    return res.status(400).json({ error: 'Missing type or scores' });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a DISC personality coach. Provide short, personalized coaching insights for a user based on their DISC type and score breakdown.',
        },
        {
          role: 'user',
          content: `DISC Type: ${type}\nScores: ${JSON.stringify(scores)}\nGenerate a personalized coaching insight.`,
        },
      ],
      temperature: 0.7,
    });

    const message = completion.data.choices[0].message.content;
    res.status(200).json({ message });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to generate coaching insight' });
  }
}
