import express from 'express';
import { getContinets } from '../controllers/continents.controller';
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/user.controller';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);

export default router;
