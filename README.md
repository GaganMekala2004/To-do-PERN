
# To-Do List Application (PERN Stack)

This is a simple To-Do List application built with the PERN stack (PostgreSQL, Express, React, Node.js). It allows users to add, edit, and delete tasks. The tasks are stored persistently in a PostgreSQL database.

## Features
- Add tasks
- Edit tasks
- Delete tasks
- Persistent data storage in PostgreSQL

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

---

## Installation

### Backend Setup
1. Navigate to the backend directory.
2. Install dependencies.
3. Set up the PostgreSQL database and create a tasks table.
4. Start the backend server on `http://localhost:5000`.

### Frontend Setup
1. Navigate to the frontend directory.
2. Install dependencies.
3. Start the React development server on `http://localhost:3000`.

---

## Usage

1. Open the app in your browser.
2. Add tasks using the input field and the "Add Task" button.
3. Edit or delete tasks using the corresponding buttons next to each task.
4. All tasks will be stored persistently in the PostgreSQL database.

---

## Project Structure

- **/frontend**: Contains React components and styles.
- **/backend**: Contains Express server, routes, and database models.

---

## API Endpoints

- **GET /tasks**: Fetch all tasks from the database
- **POST /tasks**: Add a new task
- **PUT /tasks/:id**: Edit a specific task
- **DELETE /tasks/:id**: Delete a specific task

---

## Styling

The application has a simple, clean design with the following styles:

- General Reset to ensure consistent styling across browsers.
- Centered layout with a light background color.
- Tasks displayed with cards and hover effects.
- Buttons styled in different colors for edit, delete, and submit actions.

---
