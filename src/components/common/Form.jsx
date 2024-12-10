const Form = ({ addTask }) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <input
        type="text"
        className="col-span-10 rounded border px-3 py-2 text-sm outline-blue-200"
        placeholder="Enter something"
      />
      <button
        onClick={() => {
          addTask();
        }}
        className="col-span-2 h-full w-full rounded bg-green-500 p-2 text-sm text-white"
      >
        Add
      </button>
    </div>
  );
};

export default Form;
