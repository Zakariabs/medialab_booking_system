import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { productId } = req.body;

    try {
      // Simulate a reservation by posting to the DummyJSON API or any backend
      const response = await axios.post('https://dummyjson.com/reservations', { productId });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to reserve item for teacher' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
