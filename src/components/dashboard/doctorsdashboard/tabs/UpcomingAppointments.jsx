import React from "react";
import "./UpcomingAppointments.css";

const appointments = [
  {
    name: "John Doe",
    datetime: "Saturday, April 26 at 09:00 AM",
    status: "confirmed",
    type: "follow-up",
  },
  {
    name: "Jane Smith",
    datetime: "Saturday, April 26 at 10:30 AM",
    status: "pending",
    type: "new Patient",
  },
  {
    name: "Robert Johnson",
    datetime: "Sunday, April 27 at 02:00 PM",
    status: "confirmed",
    type: "consultation",
  },
  {
    name: "Emily Davis",
    datetime: "Monday, April 28 at 11:00 AM",
    status: "confirmed",
    type: "follow-up",
  },
  {
    name: "John Doe",
    datetime: "Monday, April 28 at 11:00 AM",
    status: "pending",
    type: "new Patient",
  },
];

const UpcomingAppointments = () => {
  return (
    <div className="upcoming-appointments">
      <h2>Upcoming Appointments</h2>
      <p>Your upcoming appointments for the week</p>

      <div className="upcoming-list">
        {appointments.map((appt, index) => (
          <div key={index} className="upcoming-card">
            <div className="upcoming-info">
              <h4>{appt.name}</h4>
              <p>{appt.datetime}</p>
              <div className="status-type">

              <span className={`status ${appt.status}`}>{appt.status}</span>
              <span className="type">{appt.type}</span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointments;
