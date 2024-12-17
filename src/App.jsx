import { useState } from 'react';
import { Form, TaskList } from './components/common';
import Filter from './components/common/Filter';
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

  const [statusFilter, setStatusFilter] = useState('all');

  const addTask = (title) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      status: 'todo',
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(
      updatedTasks.filter(
        (task) => statusFilter === 'all' || task.status === statusFilter,
      ),
    );
  };

  const editTask = () => {};

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id != id);
    setTasks(updatedTasks);
    setFilteredTasks(
      updatedTasks.filter(
        (task) => statusFilter === 'all' || task.status === statusFilter,
      ),
    );
  };

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const changeStatus = () => {};

  const filtered = () => {
    return setFilteredTasks;
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 bg-blue-200 p-10">
      <div className="h-full w-full max-w-screen-md rounded-xl border bg-white p-10 shadow">
        <h1 className="mb-5 text-2xl font-medium">Doing something!</h1>
        <Form addTask={addTask} />
        <Filter
          tasks={tasks}
          setFilteredTasks={filtered()}
          setStatusFilter={setStatusFilter}
        />
        <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
      </div>
      <p className="text-blue-800">Made by [TeamName]</p>
    </div>
  );
}

export default App;
