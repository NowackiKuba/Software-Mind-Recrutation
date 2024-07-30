import express from 'express';
import { getContinets } from '../controllers/continents.controller';

const router = express.Router();

router.get('/', getContinets);

export default router;
