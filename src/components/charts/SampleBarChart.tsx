import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 50 },
  { name: "Mar", users: 40 },
  { name: "Apr", users: 60 },
  { name: "May", users: 80 },
];

const SampleBarChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#0d6efd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SampleBarChart;




// 🛠 Optional: Connect With Real Data
// You can pass Redux state or API response like this:

// tsx
// Copy
// Edit
// const data = useSelector((state) => state.analytics.userGrowth);
// Or receive it via props:

// tsx
// Copy
// Edit
// const MyChart = ({ chartData }) => (
//   <BarChart data={chartData} /> 
// );