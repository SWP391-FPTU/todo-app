import { useState } from 'react';

const Form = ({ addTask }) => {
  const [title, setTitle] = useState('');
  return (
    <div className="grid grid-cols-12 gap-2">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="col-span-10 rounded border px-3 py-2 text-sm outline-blue-200"
        placeholder="Enter something"
      />
      <button
        onClick={() => {
          addTask(title);
          setTitle('');
        }}
        className="col-span-2 h-full w-full rounded bg-green-500 p-2 text-sm text-white"
      >
        Add
      </button>
    </div>
  );
};

export default Form;
