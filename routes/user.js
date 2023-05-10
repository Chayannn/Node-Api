import express from 'express';
import {
  deleteUser,
  getAllUser,
  newUser,
  updateUser,
  userId,
  userIdSpecial,
} from '../controllers/user.js';

const router = express.Router();
router.get('/all', getAllUser);

router.post('/new', newUser);

router.get('/userid/special', userIdSpecial);

router.route('/userid/:id').get(userId).put(updateUser).delete(deleteUser);

export default router;
