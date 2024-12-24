import Task from './Task';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  if (tasks.length === 0)
    return <div className="mt-5 text-sm">Chưa có task nào!</div>;

  return (
    <div className="mt-5 space-y-2 text-sm">
      {tasks.map((t) => (
        <Task key={t.id} task={t} editTask={editTask} deleteTask={deleteTask} />
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
