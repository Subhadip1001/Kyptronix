import { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input 
        className="flex-1 p-2 border rounded shadow-sm focus:outline-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;