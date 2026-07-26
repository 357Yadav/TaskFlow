import { FaTrash, FaEdit, FaCalendarAlt } from "react-icons/fa";

function TaskCard({ task, onDelete, onEdit }) {

  const overdue =
    task.status !== "DONE" &&
    task.dueDate &&
    new Date(task.dueDate) < new Date();

  return (

    <div className={overdue ? "task-card overdue" : "task-card"}>

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      {task.dueDate && (
        <p>
          <FaCalendarAlt />{" "}
          <strong>Due:</strong> {task.dueDate}
        </p>
      )}

      {overdue && (
        <p style={{ color: "crimson", fontWeight: "bold" }}>
          🔴 Overdue
        </p>
      )}

      <div className="actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          <FaEdit /> Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          <FaTrash /> Delete
        </button>

      </div>

    </div>

  );

}

export default TaskCard;