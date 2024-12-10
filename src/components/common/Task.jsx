import PropTypes from 'prop-types';

const Task = ({ title }) => {
  return (
    <div className="rounded-sm border px-5 py-2">
      <h3 className="text-base font-medium">{title}</h3>
      <button>Xóa</button>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Task;
