import { useEffect, useState } from 'react';
import API from './api/axios.js';
import TaskForm from './components/TaskForm.jsx';
import TaskItem from './components/TaskItem.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get('/');
    setTasks(res.data);
  };

  const addTask = async (taskData) => {
    const res = await API.post('/', taskData);
    setTasks([res.data, ...tasks]);
  };

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const toggleTask = async (id) => {
    const res = await API.patch(`/${id}`);
    setTasks(tasks.map(t => t._id === id ? res.data : t));
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">My Tasks</h1>
        <TaskForm onAdd={addTask} />
        <div className="space-y-1">
          {tasks.map(task => (
            <TaskItem 
              key={task._id} 
              task={task} 
              onDelete={deleteTask} 
              onToggle={toggleTask} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;