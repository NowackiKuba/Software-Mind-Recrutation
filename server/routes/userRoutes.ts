import express from 'express';
import { getContinets } from '../controllers/continents.controller';
import { createUser, getUsers } from '../controllers/user.controller';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);

export default router;
