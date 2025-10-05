import Taskitem from "./Taskitem";

const Tasklist = (props) => {
  return (
    <div className="tasklist">
      {props.taskdata.length === 0 ? (
        <p className="no-tasks">No tasks yet!</p>
      ) : (
        <ul>
          {props.taskdata.map((task, index) => (
            <Taskitem
              key={index}
              text={task}
              index={index}
              onDelete={props.onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasklist;
