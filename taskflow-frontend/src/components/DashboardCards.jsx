function DashboardCards({ tasks }) {

  const total = tasks.length;

  const pending = tasks.filter(
    t => t.status === "Pending"
  ).length;

  const completed = tasks.filter(
    t => t.status === "DONE"
  ).length;

  const high = tasks.filter(
    t => t.priority === "HIGH"
  ).length;

  return (

    <div className="cards">

      <div className="card">
        <h3>Total</h3>
        <h2>{total}</h2>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <h2>{pending}</h2>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <h2>{completed}</h2>
      </div>

      <div className="card">
        <h3>High Priority</h3>
        <h2>{high}</h2>
      </div>

    </div>

  );

}

export default DashboardCards;