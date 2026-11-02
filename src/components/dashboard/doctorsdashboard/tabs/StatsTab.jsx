import React, { useState } from 'react';
import StatHeader from './StatHeader';

import './StatsTab.css';
import PatientsVisit from './PatientsVisit';
import PatientSatisfaction from './PatientSatisfaction';

const StatsTab = () => {
  const [activeTab, setActiveTab] = useState('patient-visit');

  return (
    <div className="stats-tab">
      <StatHeader />

      <div className="tab-bar">
        <button
          className={activeTab === 'patient-visit' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('patient-visit')}
        >
          Patients Visit
        </button>
        <button
          className={activeTab === 'patient-satisfaction' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('patient-satisfaction')}
        >
          Patients Satisfaction
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'patient-visit' && <PatientsVisit />}
        {activeTab === 'patient-satisfaction' && <PatientSatisfaction />}
      </div>
    </div>
  );
};

export default StatsTab;
