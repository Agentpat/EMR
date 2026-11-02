import React from 'react';
import { FaCalendarAlt, FaPills, FaFileMedicalAlt, FaMoneyBillWave } from 'react-icons/fa';
import './PatientOverview.css';

const overviewData = [
  {
    icon: <FaCalendarAlt />,
    title: 'Next Appointment',
    stat: 'Tomorrow',
    description: '10:30 AM with Dr. Johnson',
    buttonText: 'View details'
  },
  {
    icon: <FaPills />,
    title: 'Medications',
    stat: '3 Active',
    description: 'Next dose in 2 hours',
    buttonText: 'View all medications'
  },
  {
    icon: <FaFileMedicalAlt />,
    title: 'Test Results',
    stat: '2 New',
    description: 'Blood work from 05/12',
    buttonText: 'View results'
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Billing',
    stat: '$45.00',
    description: 'Due in 15 days',
    buttonText: 'Make payment'
  }
];

const PatientOverview = () => {
  return (
    <div className="patient-overview">
      {overviewData.map((item, index) => (
        <div key={index} className="overview-card">
         
          <div className="card-content">
            <div className="card-header">

            <h4>{item.title}</h4>
             <div className="card-icon">{item.icon}</div>
             </div>
            <h3>{item.stat}</h3>
            <p>{item.description}</p>
            <button>{item.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientOverview;
