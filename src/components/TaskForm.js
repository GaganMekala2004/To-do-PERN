import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ onAdd, taskToEdit, onUpdate }) => {
  const [task, setTask] = useState('');

  // If a task is passed in for editing, set it to the state
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.task);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task) return;

    try {
      if (taskToEdit) {
        // If we're editing, update the task
        const response = await axios.put(
          `http://localhost:5000/tasks/${taskToEdit.id}`,
          { task }
        );
        onUpdate(response.data); // Update the task in the list
      } else {
        // Otherwise, add a new task
        const response = await axios.post('http://localhost:5000/tasks', { task });
        onAdd(response.data); // Add the task to the list
      }
      setTask(''); // Clear the input after submission
    } catch (err) {
      console.error('Error submitting task:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
