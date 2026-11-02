import React, { useState, useEffect } from "react";
import OverviewSection from "./OverviewSection";
import './DashboardTabs.css';
import AnalyticsTab from "./AnalyticsTab";
import ReportsTab from "./ReportsTab";
import NotificationsTab from "./NotificationsTab";

const tabs = ["Overview", "Analytics", "Reports", "Notifications"];

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });

  // Handle fade out and fade in on tab change
  const handleTabChange = (tab) => {
    setFadeProp({ fade: 'fade-out' });
    setTimeout(() => {
      setActiveTab(tab);
      setFadeProp({ fade: 'fade-in' });
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
        {activeTab === "Overview" && <OverviewSection />}
        {activeTab === "Analytics" && <AnalyticsTab />}
        {activeTab === "Reports" && <ReportsTab/>}
        {activeTab === "Notifications" && <NotificationsTab/>}
      </div>
    </section>
  );
};

export default DashboardTabs;
