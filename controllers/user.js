import { sendCookie } from '../utils/features.js';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAllUser = async (req, res) => {};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user)
    return res.status(404).json({
      success: false,
      message: 'Invalid email or Username',
    });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: 'Invalid Password',
    });
  sendCookie(user, res, `Welcome back ${user.name}`, 200);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.status(404).json({
      success: false,
      message: 'User Already Exist',
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, 'registered', 201);
};

export const getMyProfile = async (req, res) => {
  const id = 'myid';

  const { token } = req.cookies;

  if (!token) {
    return res.status(404).json({
      success: false,
      message: 'Login First',
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded._id);
  res.status(200).json({
    success: true,
    user,
  });
};
