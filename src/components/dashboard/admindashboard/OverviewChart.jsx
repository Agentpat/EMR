// src/components/dashboard/OverviewChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./OverviewChart.css";

const data = [
  { month: "Jan", visits: 400, revenue: 2400 },
  { month: "Feb", visits: 300, revenue: 2210 },
  { month: "Mar", visits: 500, revenue: 2290 },
  { month: "Apr", visits: 700, revenue: 2000 },
  { month: "May", visits: 600, revenue: 2780 },
  { month: "Jun", visits: 800, revenue: 3908 },
  { month: "Jul", visits: 750, revenue: 3800 },
  { month: "Aug", visits: 900, revenue: 4300 },
  { month: "Sep", visits: 650, revenue: 3200 },
  { month: "Oct", visits: 720, revenue: 3600 },
  { month: "Nov", visits: 680, revenue: 3500 },
  { month: "Dec", visits: 760, revenue: 4000 },
];

const OverviewChart = () => {
  return (
    <div className="overview-chart-container">
      <div className="chart-header">
        <h2 className="chart-title">Overview</h2>
        <p className="chart-description">
          Patient visits and revenue for the current period.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 30}}
          barCategoryGap="20%"

        >
          <CartesianGrid  vertical={false} horizontal={false}/>
          <XAxis dataKey="month" />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f1f1f",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
            }}
          />
          <Legend
            verticalAlign="top"
            height={28}
            wrapperStyle={{ color: "#fff" }}
          />
          <Bar
            dataKey="visits"
            fill="#00c853"
            name="Visits"
            barSize={24}
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey="revenue"
            fill="#6200ea"
            name="Revenue"
            barSize={24}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
