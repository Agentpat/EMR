// App.js
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import AdminDashboard from "./components/dashboard/admindashboard/AdminDashboard";
import DoctorsDashboard from "./components/dashboard/doctorsdashboard/DoctorsDashboard";
import PatientDashboard from "./components/dashboard/patientdashboard/PatientDashboard";
import ReportsTab from "./components/dashboard/admindashboard/ReportsTab";
import NotificationsTab from "./components/dashboard/admindashboard/NotificationsTab";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="app-container">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
        <Header onMenuClick={toggleSidebar} isSidebarOpen={sidebarOpen} />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/admin" />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/doctor" element={<DoctorsDashboard />} />
            <Route path="/dashboard/patient" element={<PatientDashboard />} />
            <Route path="/reports" element={<ReportsTab />} />
            <Route path="/notifications" element={<NotificationsTab />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
