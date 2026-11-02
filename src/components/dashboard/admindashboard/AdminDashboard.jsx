import React from "react";
import HeaderGreeting from "./HeaderGreeting";
import DashboardKpis from "./DashboardKpis";
import "./AdminDashboard.css";
import DashboardTabs from "./DashboardTabs";

const AdminDashboard = () => {
  const userName = "Dr. Johnson";

  const handleExport = () => {
    alert("Exporting data...");
  };

  return (<main className="admin-dashboard"> <HeaderGreeting
    userName={userName}
    onExport={handleExport}
  />


    <DashboardKpis />

    <DashboardTabs />
  </main>


  );
};

export default AdminDashboard;
