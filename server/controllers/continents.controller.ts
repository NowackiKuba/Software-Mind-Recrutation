import { RequestHandler } from 'express';

export const getContinets: RequestHandler = async (req, res, next) => {
  try {
    const continents = [
      'Afryka',
      'Ameryka Północna',
      'Ameryka Południowa',
      'Antarktyda',
      'Australia',
      'Azja',
      'Europa',
    ];

    return res.status(200).json({ continents });
  } catch (error) {
    console.log('[GetContinets]:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
