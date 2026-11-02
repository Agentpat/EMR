import React from "react";
import "./AnalyticsHeader.css";

const AnalyticsHeader = () => {
  return (
    <header className="analytics-header">
      <div>
        <h1>Detailed Analytics</h1>
        <p>Insights and trends from your clinic data</p>
      </div>
      <div className="analytics-actions">
        <button className="btn btn-filter">Filter</button>
        <button className="btn btn-export">Export</button>
      </div>
    </header>
  );
};

export default AnalyticsHeader;
