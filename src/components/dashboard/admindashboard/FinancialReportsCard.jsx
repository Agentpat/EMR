import React from 'react';
import './FinanceReportsCards.css';

const FinancialReportsCard = () => {
  return (
    <div className="report-card financial-report">
      <div className="report-header">
        <h2>Financial Reports</h2>
        <p>Revenue, expenses, and billing</p>
      </div>

      <ul className="report-list">
        <li>
          <span>Monthly Revenue Summary</span>
          <small>Updated: Today</small>
        </li>
        <li>
          <span>Quarterly Financial Analysis</span>
          <small>Updated: Last week</small>
        </li>
        <li>
          <span>Insurance Claims Report</span>
          <small>Updated: 2 days ago</small>
        </li>
        <li>
          <span>Outstanding Payments</span>
          <small>Updated: Yesterday</small>
        </li>
      </ul>

      <div className="view-more">
        <button className="view-btn">View all financial reports</button>
      </div>
    </div>
  );
};

export default FinancialReportsCard;
