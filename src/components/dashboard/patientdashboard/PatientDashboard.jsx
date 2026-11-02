import React from 'react';
import './PatientDashboard.css';
import PatientHeader from './PatientHeader';
import PatientOverview from './PatientOverview';


const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <PatientHeader/>
      <PatientOverview/>
      
    </div>
  );
};

export default PatientDashboard;
