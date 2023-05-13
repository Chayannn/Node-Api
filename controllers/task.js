import { Task } from '../models/task.js';

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });
  res.status(201).json({
    success: true,
    messsage: 'Task added successfully',
  });
};

export const getMyTask = async (req, res, next) => {
  const userId = req.user._id;
  const tasks = await Task.find({ user: userId });

  res.status(200).json({
    success: true,
    tasks,
  });
};
