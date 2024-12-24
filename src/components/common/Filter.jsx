function Filter({ filterTask, selectedStatus, setSelectedStatus }) {
  const listStatus = ['all', 'todo', 'doing', 'done'];

  return (
    <div>
      <label>Status: </label>
      <select
        onChange={(e) => {
          {
            filterTask(e.target.value);
            setSelectedStatus(e.target.value);
          }
        }}
      >
        {listStatus.map((status) => (
          <option
            selected={status === selectedStatus}
            key={status}
            value={status}
            className="border-radius rounded border-2 border-black"
          >
            {status.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
