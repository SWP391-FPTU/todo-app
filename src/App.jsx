import { useState } from 'react';
import { TaskList } from './components/common';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Task 1',
    },
    {
      title: 'Task 2',
    },
  ]);

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 bg-blue-200 p-10">
      <div className="h-full w-full max-w-screen-md rounded-xl border bg-white p-10 shadow">
        <h1 className="mb-5 text-2xl font-medium">Doing something!</h1>
        <div className="grid grid-cols-12 gap-2">
          <input
            type="text"
            className="col-span-10 rounded border px-3 py-2 text-sm outline-blue-200"
            placeholder="Enter something"
          />
          <button className="col-span-2 h-full w-full rounded bg-green-500 p-2 text-sm text-white">
            Add
          </button>
        </div>
        <TaskList tasks={tasks} />
      </div>
      <p className="text-blue-800">Made by [TeamName]</p>
    </div>
  );
}

export default App;
