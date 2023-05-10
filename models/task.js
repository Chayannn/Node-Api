import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: String,
  description: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Task = mongoose.model('Task', schema);
