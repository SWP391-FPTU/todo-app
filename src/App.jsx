import { useState } from 'react';
import { Form, TaskList } from './components/common';
import Filter from './components/common/Filter';

function App() {
  const [ID, setID] = useState(4);

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

  const [selectedStatus, setSelectedStatus] = useState('all');

  const [filterTasks, setFilterTasks] = useState(tasks);
  const filterTask = (status) => {
    if (status === 'all') {
      setFilterTasks(tasks);
    } else {
      setFilterTasks(tasks.filter((task) => task.status === status));
    }
    console.log(filterTasks);
  };

  const doFilter = (tasks, status) => {
    if (status === 'all') {
      setFilterTasks(tasks);
    } else {
      setFilterTasks(tasks.filter((task) => task.status === status));
    }
    console.log(filterTasks);
  };

  const addTask = (title) => {
    //done
    if (title.trim() === '') {
      title = 'No title!';
    }
    const newTask = {
      id: ID,
      title: title,
      status: 'todo',
    };
    setTasks((pre) => {
      const newTasks = [...pre, newTask];
      setFilterTasks(newTasks);
      setSelectedStatus('all');
      return newTasks;
    });
    setID(ID + 1);
  };

  const editTask = (id, title, status) => {
    const updatedTask = {
      id: id,
      title: title,
      status: status,
    };
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task,
      );
      setFilterTasks(newTasks);
      doFilter(newTasks, selectedStatus);
      return newTasks;
    });
  };

  const deleteTask = (id) => {
    //done
    setTasks((tasks) => {
      const newTasks = tasks.filter((task) => task.id !== id);
      setFilterTasks(newTasks);
      doFilter(newTasks, selectedStatus);
      return newTasks;
    });
  };
  // const changeStatus = () => {}; // đã thêm vào chỗ edit

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5 bg-blue-200 p-10">
      <div className="h-full w-full max-w-screen-md rounded-xl border bg-white p-10 shadow">
        <h1 className="mb-5 text-2xl font-medium">Doing something!</h1>
        <Form addTask={addTask} />
        <Filter
          filterTask={filterTask}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <TaskList
          tasks={filterTasks}
          editTask={editTask}
          deleteTask={deleteTask}
          filterTask={filterTask}
        />
      </div>
      <p className="text-blue-800">Made by [TeamName]</p>
    </div>
  );
}

export default App;
