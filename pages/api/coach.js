import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
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
    const prompt = `You are a DISC-based AI coach. The user is a ${discType}-type personality. Respond like a helpful coach trained in that DISC profile. Here's their request: "${question}"`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful DISC AI coach.' },
        { role: 'user', content: prompt }
      ]
    });

    const reply = response.choices[0].message.content;
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('OpenAI error:', error);
    return res.status(500).json({ error: 'Something went wrong generating the response.' });
  }
}
