import React, { useState } from "react";
import ScheduleTab from "./tabs/ScheduleTab";
import PatientTab from "./tabs/PatientTab";
import TasksTab from "./tabs/TaskTab";
import StatsTab from "./tabs/StatsTab";
import './DoctorsDashboardTabs.css'; // Same style structure as admin

const tabs = ["Schedule", "Patients", "Tasks", "Stats"];

const DoctorsDashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("Schedule");
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });

  const handleTabChange = (tab) => {
    setFadeProp({ fade: "fade-out" });
    setTimeout(() => {
      setActiveTab(tab);
      setFadeProp({ fade: "fade-in" });
    }, 300); // match CSS transition duration
  };

  return (
    <section className="dashboard-tabs">
      <nav className="tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className={`tab-content ${fadeProp.fade}`}>
        {activeTab === "Schedule" && <ScheduleTab />}
        {activeTab === "Patients" && <PatientTab />}
        {activeTab === "Tasks" && <TasksTab />}
        {activeTab === "Stats" && <StatsTab />}
      </div>
    </section>
  );
};

export default DoctorsDashboardTabs;
