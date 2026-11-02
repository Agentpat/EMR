import React from "react";
import { FaClock } from "react-icons/fa";
import "./TodaySchedule.css";

const appointments = [
  {
    name: "Emma Thompson",
    time: "09:00 AM • 30 min",
    type: "Check-up",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "Michael Chen",
    time: "10:15 AM • 45 min",
    type: "Follow-up",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "Sophia Rodriguez",
    time: "11:30 AM • 60 min",
    type: "Consultation",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "James Wilson",
    time: "01:45 PM • 30 min",
    type: "Urgent",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "Olivia Parker",
    time: "03:00 PM • 45 min",
    type: "Check-up",
    image: "https://via.placeholder.com/40"
  }
];

const TodaySchedule = () => {
  return (
    <div className="today-schedule">
      <h2>Today's Schedule</h2>
      <p>You have {appointments.length} appointments scheduled for today</p>

      <div className="appointment-list">
        {appointments.map((appt, index) => (
          <div key={index} className="appointment-card">
            <img src={appt.image} alt={appt.name} className="profile-pic" />

            <div className="appointment-details">
              <h4>{appt.name}</h4>
              <div className="time-info">
                <FaClock className="clock-icon" />
                <span>{appt.time}</span>
              </div>
            </div>

            <span
              className={`type-tag type-${appt.type.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {appt.type}
            </span>

            <button className="view-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySchedule;
