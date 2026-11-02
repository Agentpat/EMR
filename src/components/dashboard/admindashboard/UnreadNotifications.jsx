import React from 'react';
import './UnreadNotifications.css';

const unreadData = [
  {
    id: 1,
    title: 'Urgent: Low medication stock',
    message: 'Amoxicillin stock is critically low. Please reorder.',
    time: '10 minutes ago',
  },
  {
    id: 2,
    title: 'New appointment request',
    message: 'Patient James Wilson requested an appointment for tomorrow.',
    time: '30 minutes ago',
  },
  {
    id: 3,
    title: 'New patient registration',
    message: 'Emily Parker has registered as a new patient.',
    time: '1 hour ago',
  },
  {
    id: 4,
    title: 'Staff schedule update',
    message: 'Dr. Rodriguez has requested time off next week.',
    time: '2 hours ago',
  },
  {
    id: 5,
    title: 'Payment received',
    message: 'Insurance payment of $1,250 received for patient #12345.',
    time: '3 hours ago',
  },
];

const UnreadNotifications = () => {
  return (
    <div className="unread-section">
      <div className="unread-header">
        <h2>Unread</h2>
        <span className="unread-badge">{unreadData.length}</span>
      </div>

      <div className="unread-list">
        {unreadData.map(({ id, title, message, time }) => (
          <div key={id} className="unread-card">
            <h3 className="unread-title">{title}</h3>
            <p className="unread-message">{message}</p>
            <span className="unread-time">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnreadNotifications;
