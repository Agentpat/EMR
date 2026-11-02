import React from 'react';
import './EarlierNotifications.css';

const earlierData = [
  {
    id: 1,
    title: 'Appointment cancelled',
    message: 'Patient Thomas Brown cancelled his appointment for yesterday.',
    time: 'Yesterday',
  },
  {
    id: 2,
    title: 'System maintenance',
    message: 'Scheduled system maintenance completed successfully.',
    time: 'Yesterday',
  },
  {
    id: 3,
    title: 'Lab results ready',
    message: 'Lab results for patient #34567 are now available.',
    time: '2 days ago',
  },
  {
    id: 4,
    title: 'New staff onboarding',
    message: 'Please welcome Dr. Lisa Wong to the Pediatrics department.',
    time: '3 days ago',
  },
];

const EarlierNotifications = () => {
  return (
    <div className="earlier-section">
      <div className="earlier-header">
        <h2>Earlier</h2>
        <span className="earlier-badge">{earlierData.length}</span>
      </div>

      <div className="earlier-list">
        {earlierData.map(({ id, title, message, time }) => (
          <div key={id} className="earlier-card">
            <h3 className="earlier-title">{title}</h3>
            <p className="earlier-message">{message}</p>
            <span className="earlier-time">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarlierNotifications;
