// AddTask.js - Component for adding new tasks

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation here before adding the task
    // For simplicity, directly adding a new task
    const newTask = { id: Date.now(), title, done: false };
    // Update state or send to API, etc.
    console.log('New Task:', newTask);
    navigate('/'); // Redirect to task list after adding
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
