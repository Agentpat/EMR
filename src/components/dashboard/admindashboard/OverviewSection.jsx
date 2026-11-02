// src/components/dashboard/OverviewSection.jsx
import React from 'react';
import OverviewChart from './OverviewChart';
import RecentAppointments from './RecentAppointments';
import './OverviewSection.css';

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <div className="overview-left">
        <OverviewChart />
      </div>
      <div className="overview-right">
        <RecentAppointments />
      </div>
    </section>
  );
};

export default OverviewSection;
