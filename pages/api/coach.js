// pages/api/coach.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { type, scores } = req.body;

  if (!type || !scores) {
    return res.status(400).json({ error: 'Missing type or scores' });
  }

  try {
    const completion = await openai.chat.completions.create({
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

    const message = completion.choices[0].message.content;
    res.status(200).json({ message });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ error: 'Failed to generate coaching insight' });
  }
}
