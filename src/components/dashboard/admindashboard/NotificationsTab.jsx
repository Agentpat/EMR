import React, { useState } from "react";
import "./NotificationsTab.css";
import UnreadNotifications from "./UnreadNotifications";
import TodayNotifications from "./TodayNotifications";
import EarlierNotifications from "./EarlierNotifications";
import NotificationSettings from "./NotificationSettings";

const initialNotifications = [
  {
    id: 1,
    title: "New patient registration",
    message: "Patient John Doe has registered successfully.",
    time: "5 mins ago",
    read: false,
  },
  {
    id: 2,
    title: "Appointment Reminder",
    message: "You have an appointment with Dr. Chen tomorrow at 10 AM.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "System Maintenance",
    message: "Scheduled maintenance on Sunday from 12 AM to 2 AM.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 4,
    title: "New Report Available",
    message: "Monthly Revenue Summary report has been generated.",
    time: "2 days ago",
    read: true,
  },
];

const NotificationsTab = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <section className="notifications-tab">
      <header className="notifications-header">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with important alerts and messages</p>
        </div>
        <div className="notifications-actions">
          <button className="btn" onClick={markAllAsRead}>
            Mark All as Read
          </button>
          <button className="btn">Filter</button>
        </div>
      </header>
      <div className="notifications-primary">
        <UnreadNotifications />
        <TodayNotifications />
        <EarlierNotifications />
      </div>
      <NotificationSettings/>
    </section>
  );
};

export default NotificationsTab;
