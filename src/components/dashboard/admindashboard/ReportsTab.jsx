import React from 'react';
import OperationalReport from './OperationalReport';


import './ReportsTab.css';
import FinancialReportsCard from './FinancialReportsCard';
import PatientReportsCard from './PatientReportsCard';
import RecentReportActivity from './RecentReportActivity';

const ReportsTab = () => {
  return (
    <section className="reports-tab">
      <header className="reports-header">
        <div>
          <h1>Available Reports</h1>
          <p>Access and generate detailed reports</p>
        </div>
        <button className="btn generate-btn">Generate New Report</button>
      </header>

      <div className="reports-row">
        <FinancialReportsCard />
        <PatientReportsCard />
        <OperationalReport />
      
      </div>
        <RecentReportActivity/>
    </section>
  );
};

export default ReportsTab;
