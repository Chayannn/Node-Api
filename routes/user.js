import express from 'express';
import {
  getAllUser,
  getMyProfile,
  login,
  register,
} from '../controllers/user.js';

const router = express.Router();
router.get('/all', getAllUser);

router.post('/new', register);

router.post('/login', login);

router.get('/me', getMyProfile);

export default router;
