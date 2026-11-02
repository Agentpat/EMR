import React from 'react';
import './ReportsCards.css';

const OperationalReports = () => {
  return (
    <div className="report-card">
      <div className="report-header">
        <h2>Operational Reports</h2>
        <p>Staff, inventory, and efficiency</p>
      </div>
      <ul className="report-list">
        <li>
          <span>Staff Performance Metrics</span>
          <small>Updated: Yesterday</small>
        </li>
        <li>
          <span>Inventory Status</span>
          <small>Updated: Today</small>
        </li>
        <li>
          <span>Room Utilization</span>
          <small>Updated: 2 days ago</small>
        </li>
        <li>
          <span>Wait Time Analysis</span>
          <small>Updated: Last week</small>
        </li>
      </ul>
      <div className="view-more">
        <button className="view-btn">View all operational reports</button>
      </div>
    </div>
  );
};

export default OperationalReports;
