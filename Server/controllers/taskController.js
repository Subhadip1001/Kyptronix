import Task from '../models/Task.js'; // Note the .js extension!

export const getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description });
  res.status(201).json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task removed' });
};

export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
};