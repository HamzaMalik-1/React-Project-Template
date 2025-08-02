import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useAppSelector } from "../../hooks/useTypedHooks";
import {
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend,
  ResponsiveContainer
} from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button, Row, Col } from "react-bootstrap";

const DashboardCharts = () => {
  const { theme } = useContext(ThemeContext);

  const userGrowth = useAppSelector((state) => state.analytics.userGrowth);
  const userRoles = useAppSelector((state) => state.analytics.userRoles);

  const chartColor = theme === "dark" ? "#0dcaf0" : "#0d6efd";

  const radarData = [
    { subject: "UI", A: 120 },
    { subject: "UX", A: 98 },
    { subject: "Performance", A: 86 },
    { subject: "SEO", A: 99 },
    { subject: "Security", A: 85 },
  ];

  const exportToPDF = () => {
    const input = document.getElementById("chart-section");
    if (!input) return;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("dashboard.pdf");
    });
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="outline-secondary" size="sm" onClick={exportToPDF}>
          Export Charts to PDF
        </Button>
      </div>

      <Row id="chart-section">
        {/* Bar Chart */}
        <Col md={6} className="mb-4">
          <h5>Monthly User Growth</h5>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={theme === "dark" ? "#fff" : "#000"} />
              <YAxis stroke={theme === "dark" ? "#fff" : "#000"} />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill={chartColor} />
            </BarChart>
          </ResponsiveContainer>
        </Col>

        {/* Pie Chart */}
        <Col md={6} className="mb-4">
          <h5>User Role Distribution</h5>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={userRoles}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {userRoles.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      theme === "dark"
                        ? ["#00bcd4", "#ffc107", "#e91e63"][index % 3]
                        : ["#0d6efd", "#198754", "#dc3545"][index % 3]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Col>

        {/* Area Chart */}
        <Col md={6} className="mb-4">
          <h5>Monthly Sales (Area Chart)</h5>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke={theme === "dark" ? "#fff" : "#000"} />
              <YAxis stroke={theme === "dark" ? "#fff" : "#000"} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="sales"
                stroke={chartColor}
                fill={chartColor}
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Col>

        {/* Radar Chart */}
        <Col md={6} className="mb-4">
          <h5>Feature Scores (Radar Chart)</h5>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" stroke={theme === "dark" ? "#fff" : "#000"} />
              <PolarRadiusAxis />
              <Radar
                name="Score"
                dataKey="A"
                stroke={chartColor}
                fill={chartColor}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </>
  );
};

export default DashboardCharts;
