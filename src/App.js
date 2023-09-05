import React, { useState } from "react";   
import "./App.css";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { 
      id: Date.now(),
      text: text, 
    }; 
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
  }

  


export default App;
