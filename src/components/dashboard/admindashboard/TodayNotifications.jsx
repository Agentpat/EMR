import React from 'react';
import './TodayNotifications.css';

const todayData = [
  {
    id: 1,
    title: 'Appointment confirmed',
    message: 'Dr. Chen confirmed appointment with patient #23456.',
    time: '4 hours ago',
  },
  {
    id: 2,
    title: 'Staff meeting reminder',
    message: 'Weekly staff meeting today at 3:00 PM in Conference Room A.',
    time: '5 hours ago',
  },
  {
    id: 3,
    title: 'Schedule change',
    message: 'Your 2:00 PM appointment has been rescheduled to 3:30 PM.',
    time: '6 hours ago',
  },
  {
    id: 4,
    title: 'Invoice paid',
    message: 'Patient Maria Garcia has paid invoice #INV-2023-0456.',
    time: '8 hours ago',
  },
];

const TodayNotifications = () => {
  return (
    <div className="today-section">
      <div className="today-header">
        <h2>Today</h2>
        <span className="today-badge">{todayData.length}</span>
      </div>

      <div className="today-list">
        {todayData.map(({ id, title, message, time }) => (
          <div key={id} className="today-card">
            <h3 className="today-title">{title}</h3>
            <p className="today-message">{message}</p>
            <span className="today-time">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayNotifications;
