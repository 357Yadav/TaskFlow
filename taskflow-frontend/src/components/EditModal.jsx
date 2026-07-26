import { useState, useEffect } from "react";

function EditModal({ task, onClose, onSave }) {

  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  if (!task) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Task</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />

          <input
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
          >
            <option>LOW</option>
            <option>MEDIUM</option>
            <option>HIGH</option>
          </select>

          <select
            name="status"
            value={editedTask.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>DONE</option>
          </select>

          <div className="modal-buttons">
            <button type="submit">Save</button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default EditModal;