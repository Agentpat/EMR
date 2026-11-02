import React, { useState } from 'react';
import './NotificationSettings.css';

const categories = [
  {
    title: 'Appointments',
    description: 'New, cancelled, and rescheduled appointments',
  },
  {
    title: 'Patient Updates',
    description: 'New registrations and patient status changes',
  },
  {
    title: 'Staff Alerts',
    description: 'Schedule changes and staff announcements',
  },
  {
    title: 'Inventory Alerts',
    description: 'Low stock and reorder notifications',
  },
];

const deliveryMethods = [
  'In-app Notifications',
  'Email Notifications',
  'SMS Notifications',
  'Push Notifications',
];

const NotificationSettings = () => {
  // Keep track of toggles for categories (multiple can be on)
  const [categoryToggles, setCategoryToggles] = useState(
    categories.reduce((acc, cat) => {
      acc[cat.title] = true; // default all ON, adjust as needed
      return acc;
    }, {})
  );

  // Now delivery methods can be multiple selected
  const [deliveryToggles, setDeliveryToggles] = useState(
    deliveryMethods.reduce((acc, method) => {
      acc[method] = false; // default all off, adjust as needed
      return acc;
    }, {})
  );

  const toggleCategory = (title) => {
    setCategoryToggles((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleDelivery = (method) => {
    setDeliveryToggles((prev) => ({
      ...prev,
      [method]: !prev[method],
    }));
  };

  return (
    <section className="notification-settings">
      <h1>Notification Settings</h1>
      <p>Manage how you receive notifications</p>

      <div className="settings-row">
        <div className="settings-section categories-section">
          <h2>Notification Categories</h2>
          {categories.map(({ title, description }) => (
            <div key={title} className="setting-item">
              <div className="setting-text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={categoryToggles[title]}
                  onChange={() => toggleCategory(title)}
                />
                <span className="slider"></span>
              </label>
            </div>
          ))}
        </div>

        <div className="settings-section delivery-section">
          <h2>Delivery Methods</h2>
          {deliveryMethods.map((method) => (
            <div key={method} className="setting-item">
              <div className="setting-text">
                <h3>{method}</h3>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={deliveryToggles[method]}
                  onChange={() => toggleDelivery(method)}
                />
                <span className="slider"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotificationSettings;
