import { useState } from 'react';
import { Form, TaskList } from './components/common';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Todo task',
      status: 'todo',
    },
    {
      id: 2,
      title: 'Doing task',
      status: 'doing',
    },
    {
      id: 3,
      title: 'Done task',
      status: 'done',
    },
  ]);

  const addTask = () => {
    const newTask = {
      id: 10,
      title: 'New task',
      status: 'todo',
    };
    setTasks((pre) => [...pre, newTask]);
  };

  const editTask = () => {};
  const deleteTask = () => {};
  const changeStatus = () => {};

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 bg-blue-200 p-10">
      <div className="h-full w-full max-w-screen-md rounded-xl border bg-white p-10 shadow">
        <h1 className="mb-5 text-2xl font-medium">Doing something good!</h1>
        <Form addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
      <p className="text-blue-800">Made by [TeamName]</p>
    </div>
  );
}

export default App;
