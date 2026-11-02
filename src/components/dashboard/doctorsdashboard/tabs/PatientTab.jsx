import React from 'react';
import TodayPatients from './TodayPatients';
import RecentNotes from './RecentNotes';
import './PatientTab.css';

const PatientTab = () => {
  return (
    <div className="patients-tab">
      <TodayPatients />
      <RecentNotes />
    </div>
  );
};

export default PatientTab;
