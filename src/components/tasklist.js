// TaskList.js - Component displaying the list of tasks

// TaskList.js - Component displaying the list of tasks

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css'; // Import the CSS file

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', done: false },
    { id: 2, title: 'Task 2', done: true },
    // Add more tasks as needed
  ]);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <Link to={`/task/${task.id}`} className="task-link">{task.title}</Link>
            <button onClick={() => handleDelete(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add-task" className="add-task-link">Add Task</Link>
    </div>
  );
};

export default TaskList;
