import React from 'react';
import PatientDemographicsChart from './PatientDemographicsChart';
import AppointmentTypesChart from './AppointmentTypesChart';
import RevenueSourcesChart from './RevenueSourcesChart';
import PatientSatisfaction from './PatientSatisfaction';
import StaffPerformance from './StaffPerformance';
import './AnalyticsTab.css';

const AnalyticsTab = () => {
  return (
    <section className="analytics-tab">
      <header className="analytics-header">
        <div>
          <h1>Detailed Analytics</h1>
          <p>Insights and trends from your clinic data</p>
        </div>
        <div className="analytics-actions">
          <button className="btn">Filter</button>
          <button className="btn">Export</button>
        </div>
      </header>

      {/* Row of charts: Patient Demographics, Appointment Types, Revenue Sources */}
      <div className="analytics-row">
        <PatientDemographicsChart />
        <AppointmentTypesChart />
        <RevenueSourcesChart />
      </div>

      {/* Row for Patient Satisfaction and Staff Performance */}
      <div className="analytics-row secondary-row">
        <PatientSatisfaction />
        <StaffPerformance />
      </div>
    </section>
  );
};

export default AnalyticsTab;
