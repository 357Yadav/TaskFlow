import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import TaskCharts from "../components/TaskCharts";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import EditModal from "../components/EditModal";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("ALL");
  const [priorityFilter, setPriorityFilter] = useState("ALL");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async (task) => {
    try {
      await createTask(task);
      loadTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = (task) => {
    setSelectedTask(task);
  };

  const saveTask = async (task) => {
    try {

      await updateTask(task.id, {
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
      });

      setSelectedTask(null);

      loadTasks();

    } catch (err) {
      console.log(err);
    }
  };

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" ||
      task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "ALL" ||
      task.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );

  });

  return (
    <div>

      <Navbar />

      <DashboardCards tasks={tasks} />

      <TaskCharts tasks={tasks} />

      <TaskForm onAdd={addTask} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterBar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />

      <div className="task-list">

        {filteredTasks.map((task) => (

          <TaskCard
            key={task.id}
            task={task}
            onDelete={removeTask}
            onEdit={editTask}
          />

        ))}

      </div>

      {selectedTask && (
        <EditModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={saveTask}
        />
      )}

    </div>
  );
}

export default Dashboard;