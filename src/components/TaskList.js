import React, { useState } from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTaskText, setNewTaskText] = useState('');

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setNewTaskText(task.task);  // Populate with existing task text
  };

  const handleSave = async (taskId) => {
    if (!newTaskText) return;  // Ensure new task text is not empty
    try {
      await onEdit(taskId, newTaskText);  // Save the updated task
      setEditingTaskId(null); // Close editing mode
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <>
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}  // Update new task text
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
              <button onClick={() => setEditingTaskId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{task.task}</span>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
