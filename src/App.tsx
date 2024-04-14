import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {
  const [tasks, setTasks] = useState([
    { taskId: 1, title: 'HTML&CSS  ', isDone: true },
    { taskId: 2, title: 'JS  ', isDone: true },
    { taskId: 3, title: 'ReactJS  ', isDone: false },
    { taskId: 4, title: 'Rest API  ', isDone: true },
    { taskId: 5, title: 'Graph QL  ', isDone: false },
    { taskId: 6, title: 'Java  ', isDone: false },
    { taskId: 7, title: 'Kotlin  ', isDone: true },
    { taskId: 8, title: 'PHP  ', isDone: true },
  ]);
  

  const toggleDone = (taskId: number, isDone: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === taskId ? { ...task, isDone: isDone } : task
    )
    setTasks(updatedTasks)
  };

  const [filter, setFilter] = useState('All');

  const removeTask = (taskId: number) => {
    let filteredTasks = tasks.filter((task) => task.taskId !== taskId);
    setTasks(filteredTasks)
  };

  const handleFilterChange = (filterValue: string) => {
    setFilter(filterValue)
  };

  let  filteredTasks = tasks
  if (filter === 'Active') {
    filteredTasks = tasks.filter((task) => !task.isDone)
  } else if (filter === 'Completed') {
    filteredTasks = tasks.filter((task) => task.isDone)
  }

  return (
    <div className="App">
      <Todolist title="Task Manager" tasks={filteredTasks} removeTask={removeTask} onToggleDone={toggleDone} />
      <div className='asd'>
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Active')}>Active</button>
        <button onClick={() => handleFilterChange('Completed')}>Completed</button>
      </div>
    </div>
  );
}

export default App;
