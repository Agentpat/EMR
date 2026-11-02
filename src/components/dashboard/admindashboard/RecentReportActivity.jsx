import React from 'react';
import './RecentReportActivity.css';

const recentActivities = [
  { initial: 'J', user: 'Dr. Johnson', action: 'generated', report: 'Monthly Revenue Summary', time: '2 hours ago' },
  { initial: 'S', user: 'Admin Sarah', action: 'viewed', report: 'Staff Performance Metrics', time: 'Yesterday, 4:30 PM' },
  { initial: 'R', user: 'Dr. Rodriguez', action: 'generated', report: 'Patient Demographics', time: 'Yesterday, 2:15 PM' },
  { initial: 'K', user: 'Nurse Kim', action: 'viewed', report: 'Inventory Status', time: '2 days ago' },
  { initial: 'C', user: 'Dr. Chen', action: 'generated', report: 'Treatment Outcomes', time: '3 days ago' },
];

const RecentReportActivity = () => {
  return (
    <section className="recent-report-activity">
      <h2>Recent Report Activity</h2>
      <p>Reports generated or viewed recently</p>
      <ul className="activity-list">
        {recentActivities.map(({ initial, user, action, report, time }, index) => (
          <li key={index} className="activity-item">
            <div className="initial-circle">{initial}</div>
            <div className="activity-text">
              <span className="user-name">{user}</span> {action} <strong>{report}</strong>
              <div className="activity-time">{time}</div>
            </div>
            <button className="view-btn">View</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentReportActivity;
