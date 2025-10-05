const Taskitem = ({ text, index, onDelete }) => {
  return (
    <li className="task-item">
      <span className="task-text">{text}</span>
      <button className="delete-btn" onClick={() => onDelete(index)}>
        Delete
      </button>
    </li>
  );
};

export default Taskitem;
