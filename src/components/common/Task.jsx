import PropTypes from 'prop-types';

// const Task = ({ title }) => {
//   return (
//     <div className="rounded-sm border px-5 py-2">
//       <h3 className="text-base font-medium">{title}</h3>
//       <button
//       >Xóa</button>
//     </div>
//   );
// };

const Task = ({ title = '', onDelete = () => {} }) => {
  return (
    <div className="flex items-center justify-between rounded-sm border px-5 py-2">
      <h3 className="text-base font-medium">{title}</h3>
      <button
        onClick={onDelete}
        className="rounded bg-red-500 px-3 py-1 text-sm text-white"
      >
        Xóa
      </button>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Task;
