// TaskDetails.js - Component displaying individual task details

import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();

  // Fetch task details based on id (fetch from state, API, etc.)
  // For simplicity, a placeholder task is shown here
  const task = { id, title: `Task ${id}`, done: false };

  return (
    <div>
      <h2>Task Details</h2>
      <p>ID: {task.id}</p>
      <p>Title: {task.title}</p>
      <p>Status: {task.done ? 'Done' : 'Undone'}</p>
    </div>
  );
};

export default TaskDetails;
