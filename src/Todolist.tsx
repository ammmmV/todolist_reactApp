import React, { useState } from 'react';

type DataProps = {
  title: string;
  tasks: NewTasks[];
  removeTask: (taskId: number) => void;
  onToggleDone: (taskId: number, isDone: boolean) => void;
};

type NewTasks = {
  taskId: number;
  title: string;
  isDone: boolean;
};

type TaskProps = {
  taskId: number;
  title: string;
  isDone: boolean;
  onDelete: (taskId: number) => void;
  onToggleDone: (taskId: number, isDone: boolean) => void;
};

export function Todolist(props: DataProps) {
  const handleDelete = (taskId: number) => {
    props.removeTask(taskId);
    console.log(`removed element wich ID is: ${taskId}`)
  };
  const handleDone = (taskId: number, isDone: boolean) => {
    props.onToggleDone(taskId, isDone)
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.tasks.map((task) => (
          <Task
            key={task.taskId}
            taskId={task.taskId}
            title={task.title}
            isDone={task.isDone}
            onDelete={handleDelete}
            onToggleDone={handleDone}
          />
        ))}
      </ul>
    </div>
  );
}

export function Task(props: TaskProps) {
  const [isDone, setIsDone] = useState(props.isDone);

  const handleToggleDoneDelete = () => {
    setIsDone(!isDone)
    props.onToggleDone(props.taskId, !isDone)
  };

  return (
    <li>
      <input type="checkbox" className='check_act' checked={isDone} onChange={handleToggleDoneDelete} />
      <span>{props.title}</span>
      <button className="removeBTN" onClick={() => props.onDelete(props.taskId)}>✖️</button>
    </li>
  );
}
