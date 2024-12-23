import { useState } from 'react';

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') return; // Kiểm tra input rỗng
    addTask(inputValue);
    setInputValue(''); // Xóa input sau khi thêm task
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <input
        type="text"
        className="col-span-10 rounded border px-3 py-2 text-sm outline-blue-200"
        placeholder="Enter something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        // onClick={() => {
        //   addTask();
        // }}
        onClick={handleAdd}
        className="col-span-2 h-full w-full rounded bg-green-500 p-2 text-sm text-white"
      >
        Add
      </button>
    </div>
  );
};

export default Form;
