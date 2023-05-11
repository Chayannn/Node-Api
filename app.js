import express from 'express';
import router from './routes/user.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

export const app = express();

config({
  path: './database/config.env',
});
// Using Middleware
app.use(express.json());
app.use(cookieParser());

// Using Routes
app.use('/api/v1/users', router);

app.get('/', (req, res) => {
  res.send('Nice working');
});
