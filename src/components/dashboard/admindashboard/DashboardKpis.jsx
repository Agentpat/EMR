// src/components/dashboard/DashboardKpis.jsx
import React from "react";

const kpis = [
  { title: "Total Revenue", change: "+20.1% from last month", value: "$45,231.89" },
  { title: "Appointments", change: "+10.1% from last month", value: "+2,350" },
  { title: "Patients", change: "+19% from last month", value: "+12,234" },
  { title: "Staff", change: "+4 new this month", value: "+573" },
];

const DashboardKpis = () => (
  <section className="dashboard-kpis">
    {kpis.map(({ title, change, value }) => (
      <div key={title} className="kpi-card">
        <p className="kpi-change">{change}</p>
        <p className="kpi-value">{value}</p>
        <h4 className="kpi-title">{title}</h4>
      </div>
    ))}
  </section>
);

export default DashboardKpis;
