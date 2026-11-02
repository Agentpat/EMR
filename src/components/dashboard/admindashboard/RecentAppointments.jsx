// src/components/dashboard/RecentAppointments.jsx
import React, { useState } from "react";
import { FiCalendar, FiMoreVertical } from "react-icons/fi";
import profilePlaceholder from "../../../assets/profilePlaceholder.png"; // Adjust the path as necessary
import "./RecentAppointments.css";

const appointments = [
  {
    id: 1,
    patient: "John Smith",
    type: "Check-up",
    date: "Today",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Emily Davis",
    type: "Consultation",
    date: "Today",
    time: "11:30 AM",
    status: "In Progress",
  },
   {
    id: 3,
    patient: "Emily Davis",
    type: "Consultation",
    date: "Today",
    time: "11:30 AM",
    status: "completed",
  },
];

const RecentAppointments = () => {
  const [openModalId, setOpenModalId] = useState(null);

  const toggleModal = (id) => {
    setOpenModalId(openModalId === id ? null : id);
  };

  return (
    <section className="recent-appointments">
      <div className="header">
        <h3>Recent Appointments</h3>
        <p>You have {appointments.length} appointments today.</p>
      </div>

      <ul className="appointments-list">
        {appointments.map(({ id, patient, type, date, time, status }) => (
          <li key={id} className="appointment-card">
            <img src={profilePlaceholder} alt={patient} className="profile-img" />

            <div className="appointment-info">
              <div className="row name-type">
                <span className="patient-name">{patient}</span>
                <span className="appointment-type">{type}</span>
                <div className="row date-time">
                  <span className="date">
                    <FiCalendar className="icon" />
                    {date}
                  </span>
                  <span className="time">{time}</span>
                </div>
              </div>
            </div>

            <span
              className={`status-tag ${status.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {status}
            </span>

            <div className="more-wrapper">
              <button className="more-options" onClick={() => toggleModal(id)}>
                <FiMoreVertical />
              </button>

              {openModalId === id && (
                <div className="options-modal">
                  <div className="modal-header">Actions</div>
                  <ul>
                    <li>View Details</li>
                    <li>Edit Appointment</li>
                    <li className="danger">Cancel Appointment</li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="view-all">
        <a href="/appointments/view">View all appointments</a>
      </div>
    </section>
  );
};

export default RecentAppointments;
