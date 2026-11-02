import React from 'react';
import PatientsVisitChart from './PatientVisitChart';
import PatientsVisitMetrics from './PatientsVisitMetrics';

const PatientsVisit = () => {
  return (
    <div className="visit-section">
      <PatientsVisitChart/>
      <PatientsVisitMetrics/>
    </div>
  );
};

export default PatientsVisit;
