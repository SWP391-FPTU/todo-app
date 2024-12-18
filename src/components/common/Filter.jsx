function Filter({ tasks, setFilteredTasks, setStatusFilter }) {
  const handleFilterChange = (e) => {
    const status = e.target.value;
    setStatusFilter(status);
    if (status === 'all') {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) => task.status === status);
      setFilteredTasks(filteredTasks);
    }
    return status;
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      <label htmlFor="filter" className="text-lg font-semibold">
        Filter by status:
      </label>
      <select
        id="filter"
        onChange={handleFilterChange}
        className="rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default Filter;
