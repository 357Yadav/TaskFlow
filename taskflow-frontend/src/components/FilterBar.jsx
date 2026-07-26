function FilterBar({
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) {

  return (
    <div className="filter-bar">

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="ALL">All Status</option>
        <option value="Pending">Pending</option>
        <option value="DONE">Completed</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="ALL">All Priority</option>
        <option value="HIGH">High</option>
        <option value="MEDIUM">Medium</option>
        <option value="LOW">Low</option>
      </select>

    </div>
  );
}

export default FilterBar;