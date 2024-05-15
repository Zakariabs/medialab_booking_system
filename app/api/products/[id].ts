import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product details' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
