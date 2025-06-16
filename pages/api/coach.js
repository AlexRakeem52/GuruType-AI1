export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { discType, question } = req.body;

  if (!discType || !question) {
    return res.status(400).json({ error: 'Missing discType or question' });
  }

  try {
    return res.status(200).json({
      reply: `Hello from your ${discType}-style coach! Here's advice on "${question}".`
    });
  } catch (error) {
    console.error('[ERROR]', error);
    return res.status(500).json({ error: 'Server failed.' });
  }
}
