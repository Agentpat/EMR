import React, { useState } from "react";
import OverviewSection from "./OverviewSection";
import "./DashboardTabs.css";
import AnalyticsTab from "./AnalyticsTab";
import ReportsTab from "./ReportsTab";
import NotificationsTab from "./NotificationsTab";

const tabs = ["Overview", "Analytics", "Reports", "Notifications"];

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;


    setFadeProp({ fade: "fade-out" });

    setTimeout(() => {
      setActiveTab(tab);
      setFadeProp({ fade: "fade-in" });
    }, 300);

  };

  return (<section className="dashboard-tabs"> <nav className="tab-nav">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`tab-item ${activeTab === tab ? "active" : ""}`}
        onClick={() => handleTabChange(tab)}
      >
        {tab} </button>
    ))} </nav>


    <div className={`tab-content ${fadeProp.fade}`}>
      {activeTab === "Overview" && <OverviewSection />}
      {activeTab === "Analytics" && <AnalyticsTab />}
      {activeTab === "Reports" && <ReportsTab />}
      {activeTab === "Notifications" && <NotificationsTab />}
    </div>
  </section>


  );
};

export default DashboardTabs;
