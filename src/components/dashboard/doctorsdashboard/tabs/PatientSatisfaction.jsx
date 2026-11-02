import React from 'react';
import PatientSatisfactionChart from './PatientSatsfactionChart';
import PatientsVisitMetrics from './PatientsVisitMetrics';

const PatientSatisfaction = () => {
  return (
    <div className="patient-satisfaction">
     <PatientSatisfactionChart/>
     <PatientsVisitMetrics/>
    </div>
  );
};

export default PatientSatisfaction;
