import { useState } from "react";

function TaskForm({ onAdd }) {

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "LOW",
    dueDate: "",
  });

  const handleChange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await onAdd(task);

    setTask({
      title: "",
      description: "",
      priority: "LOW",
      dueDate: "",
    });

  };

  return (

    <form className="task-form" onSubmit={handleSubmit}>

      <input
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <input
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option>LOW</option>
        <option>MEDIUM</option>
        <option>HIGH</option>
      </select>

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />

      <button>Add Task</button>

    </form>

  );

}

export default TaskForm;