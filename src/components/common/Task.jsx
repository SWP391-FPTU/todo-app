import PropTypes from 'prop-types';
import { useState } from 'react';

const Task = ({ task, editTask, deleteTask }) => {
  const [newTitle, setNewTitle] = useState('');

  const [newStatus, setNewStatus] = useState('');

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (isSave) => {
    setNewTitle(task.title);
    setNewStatus(task.status);
    if (isEdit) {
      if (isSave) {
        editTask(task.id, newTitle, newStatus);
      } else {
        setNewTitle(task.title);
        setNewStatus(task.status);
      }
    }
    setIsEdit(!isEdit);
    console.log('log: ' + task.title + '--' + task.status);
    console.log(isEdit + ' ++ ' + isSave);
    console.log('----state: ' + newTitle + '--' + newStatus);
  };

  return (
    <div className="grid grid-cols-4 gap-3 rounded-sm border px-5 py-2">
      <div className="col-span-2 block">
        <input
          id="1"
          type="text"
          className="block text-base font-medium"
          disabled={isEdit ? false : true}
          value={isEdit ? newTitle : task.title}
          style={{ border: isEdit ? '2px solid black' : null }}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <select
          className={
            isEdit
              ? 'col-span-1 rounded border-2 border-solid border-black'
              : 'col-span-1'
          }
          onChange={(e) => {
            setNewStatus(e.target.value);
          }}
          disabled={!isEdit}
        >
          <option value={'todo'} selected={task.status === 'todo'}>
            Todo
          </option>
          <option value={'doing'} selected={task.status === 'doing'}>
            Doing
          </option>
          <option value={'done'} selected={task.status === 'done'}>
            Done
          </option>
        </select>
      </div>
      <div className="flex items-center">
        <button onClick={() => deleteTask(task.id)}>Xóa</button>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="btn rounded-sm border-2 border-solid border-black"
          onClick={() => {
            handleEdit(true);
          }}
        >
          {isEdit ? 'Save' : 'Edit'}
        </button>
        {isEdit && (
          <button
            className="btn rounded-sm border-2 border-solid border-black"
            onClick={() => {
              handleEdit(false);
            }}
          >
            Exit
          </button>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Task;
