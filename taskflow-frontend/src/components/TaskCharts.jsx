import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

function TaskCharts({ tasks }) {

  const pending =
    tasks.filter(t => t.status === "Pending").length;

  const completed =
    tasks.filter(t => t.status === "DONE").length;

  const high =
    tasks.filter(t => t.priority === "HIGH").length;

  const medium =
    tasks.filter(t => t.priority === "MEDIUM").length;

  const low =
    tasks.filter(t => t.priority === "LOW").length;

  const pieData = [
    { name: "Pending", value: pending },
    { name: "Completed", value: completed },
  ];

  const barData = [
    { priority: "High", tasks: high },
    { priority: "Medium", tasks: medium },
    { priority: "Low", tasks: low },
  ];

  const COLORS = ["#f59e0b", "#10b981"];

  return (

    <div className="charts">

      <div className="chart-card">

        <h3>Task Status</h3>

        <ResponsiveContainer width="100%" height={300}>

          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >

              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="chart-card">

        <h3>Priority Distribution</h3>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={barData}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="priority"/>

            <YAxis/>

            <Tooltip/>

            <Legend/>

            <Bar
              dataKey="tasks"
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default TaskCharts;