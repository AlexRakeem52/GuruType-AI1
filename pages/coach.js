import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { topType, scores } = req.body;

  try {
    const prompt = `
You are an AI DISC personality coach. Based on the DISC scores provided below, give a concise paragraph about the user's primary DISC type, followed by 2 tailored growth recommendations.

DISC Scores:
Dominance (D): ${scores.D}
Influence (I): ${scores.I}
Steadiness (S): ${scores.S}
Conscientiousness (C): ${scores.C}

Top Type: ${topType}

Respond in this format:
1. Description of top DISC type.
2. Tip 1
3. Tip 2
`;

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const response = completion.data.choices[0].message.content;
    return res.status(200).json({ response });
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
