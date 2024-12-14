function Filter({ tasks, setFilteredTasks }) {
  const handleFilterChange = (e) => {
    const status = e.target.value;
    if (status === 'all') {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.status === status);
      setFilteredTasks(filteredTasks);
    }
  };

  return (
    <div>
      <label htmlFor="filter">Filter by status: </label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default Filter;
