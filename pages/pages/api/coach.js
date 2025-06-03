// pages/api/coach.js

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests are allowed' });
  }

  const { discType, discSummary } = req.body;

  if (!discType || !discSummary) {
    return res.status(400).json({ error: 'Missing DISC type or summary' });
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a friendly and professional DISC personality coach who helps users improve based on their DISC style. Be clear, helpful, and brief.`
        },
        {
          role: 'user',
          content: `My DISC type is ${discType}. Here's a short description: ${discSummary}. What are some growth tips or actions I can take?`
        }
      ]
    });

    const coachingResponse = chatCompletion.choices[0].message.content;

    res.status(200).json({ advice: coachingResponse });
  } catch (error) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Failed to get coaching advice.' });
  }
}
