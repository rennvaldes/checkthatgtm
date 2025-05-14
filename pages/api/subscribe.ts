import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const BEEHIIV_PUBLICATION_ID = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;
  const BEEHIIV_API_KEY = process.env.NEXT_PUBLIC_BEEHIIV_API_TOKEN;

  if (!BEEHIIV_PUBLICATION_ID || !BEEHIIV_API_KEY) {
    return res.status(500).json({ message: 'Beehiiv API credentials are not configured.' });
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          send_welcome_email: true,
        }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json(data);
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
} 