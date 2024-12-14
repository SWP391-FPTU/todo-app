import Task from './Task';
import PropTypes from 'prop-types';

// const TaskList = ({ tasks }) => {
//   if (tasks.length === 0)
//     return <div className="mt-5 text-sm">Chưa có task nào!</div>;

//   return (
//     <div className="mt-5 space-y-2 text-sm">
//       {tasks.map((t, index) => (
//         <Task key={index} title={t.title} />
//       ))}
//     </div>
//   );
// };

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0)
    return <div className="mt-5 text-sm">Chưa có task nào!</div>;

  return (
    <div className="mt-5 space-y-2 text-sm">
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          onDelete={() => deleteTask(task.id)} // Gọi hàm xóa khi nhấn nút "Xóa"
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default TaskList;
