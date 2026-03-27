const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
      <div className="flex items-center justify-between p-3 border-b hover:bg-gray-50">
        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => onToggle(task._id)}
            className="w-5 h-5 cursor-pointer"
          />
          <span className={task.completed ? "line-through text-gray-400" : "text-gray-800"}>
            {task.title}
          </span>
        </div>
        <button 
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:text-red-700 text-sm font-bold"
        >
          Delete
        </button>
      </div>
    );
  };
  
  export default TaskItem;