import pkg from 'pg';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const { Client } = pkg;

const db = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Connect to the database
db.connect();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // for parsing application/json

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM tasks');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a task
app.post('/tasks', async (req, res) => {
    const { task } = req.body;
    try {
        const result = await db.query('INSERT INTO tasks (task) VALUES ($1) RETURNING *', [task]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Task not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  try {
      const result = await db.query(
          'UPDATE tasks SET task = $1 WHERE id = $2 RETURNING *',
          [task, id]
      );
      if (result.rowCount === 0) {
          return res.status(404).send('Task not found');
      }
      res.json(result.rows[0]);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});



// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
