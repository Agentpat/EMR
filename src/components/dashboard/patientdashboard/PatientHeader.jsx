import React from 'react';
import { FaCommentDots, FaCalendarPlus } from 'react-icons/fa';
import './PatientHeader.css';

const PatientHeader = () => {
  return (
    <div className="patient-header">
      <div className="patient-greeting">
        <h2>Welcome back, Sarah</h2>
        <p>Your health dashboard – manage your care all in one place</p>
      </div>

      <div className="patient-actions">
        <button className="action-btn message-btn">
          <FaCommentDots className="icon" />
          Message Doctor
        </button>
        <button className="action-btn appointment-btn">
          <FaCalendarPlus className="icon" />
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default PatientHeader;
