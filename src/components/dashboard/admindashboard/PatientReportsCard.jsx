import React from 'react';
import './ReportsCards.css';

const PatientReportsCard = () => {
  return (
    <div className="report-card patient-report">
      <div className="report-header">
        <h2>Patient Reports</h2>
        <p>Demographics and visit analytics</p>
      </div>

      <ul className="report-list">
        <li>
          <span>New Patient Registrations</span>
          <small>Updated: Today</small>
        </li>
        <li>
          <span>Patient Demographics</span>
          <small>Updated: 3 days ago</small>
        </li>
        <li>
          <span>Visit Frequency Analysis</span>
          <small>Updated: Last week</small>
        </li>
        <li>
          <span>Treatment Outcomes</span>
          <small>Updated: Yesterday</small>
        </li>
      </ul>

      <div className="view-more">
        <button className="view-btn">View all patient reports</button>
      </div>
    </div>
  );
};

export default PatientReportsCard;
