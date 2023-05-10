import express from 'express';
import router from './routes/user.js';
import { config } from 'dotenv';

export const app = express();

config({
  path: './database/config.env',
});

app.use(express.json());
app.use('/users', router);

app.get('/', (req, res) => {
  res.send('Nice working');
});
