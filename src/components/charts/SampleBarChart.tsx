// src/components/charts/SampleBarChart.tsx
import React, { useContext } from "react";
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
import { ThemeContext } from "../../context/ThemeContext";

// Define data shape
interface DataPoint {
  name: string;
  users: number;
}

// Props for the chart
interface SampleBarChartProps {
  data: DataPoint[];
  title?: string;
  height?: number;
}

const SampleBarChart: React.FC<SampleBarChartProps> = ({
  data,
  title = "Monthly User Growth",
  height = 300,
}) => {
  const { theme } = useContext(ThemeContext);
  const chartColor = theme === "dark" ? "#0dcaf0" : "#0d6efd";

  return (
    <div style={{ width: "100%", height }}>
      {title && <h5 className="text-center mb-3">{title}</h5>}
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={theme === "dark" ? "#fff" : "#000"} />
          <YAxis stroke={theme === "dark" ? "#fff" : "#000"} />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill={chartColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SampleBarChart;
