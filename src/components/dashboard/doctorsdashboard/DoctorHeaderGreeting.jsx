import React from 'react';
import './DoctorHeaderGreeting.css';

const DoctorHeaderGreeting = ({ doctorName = 'Dr. Sarah' }) => {
  return (
    <header className="doctor-header-greeting">
      <h1>Welcome back, {doctorName}</h1>
      <p>Here's what's happening with your patients today.</p>
    </header>
  );
};

export default DoctorHeaderGreeting;
