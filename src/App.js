import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };
    fetchTasks();
  }, []);

  const handleAdd = (newTask) => setTasks([...tasks, newTask]);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const handleEdit = async (taskId, newTaskText) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${taskId}`, { task: newTaskText });
      setTasks(tasks.map((task) => (task.id === taskId ? response.data : task)));
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return (
    <div>
      <h1 className="todo-title">To-Do List</h1> {/* Added title */}
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
