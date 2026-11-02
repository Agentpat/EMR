import React from "react";
import "./TodayPatients.css";

const patients = [
  {
    name: "Emma Thompson",
    age: 42,
    gender: "Female",
    status: "New Patient",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "Michael Chen",
    age: 35,
    gender: "Male",
    status: "Follow-up",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "Sophia Rodriguez",
    age: 28,
    gender: "Female",
    status: "Regular",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "James Wilson",
    age: 67,
    gender: "Male",
    status: "Urgent",
    image: "https://via.placeholder.com/40"
  },
  {
    name: "Olivia Parker",
    age: 8,
    gender: "Female",
    status: "Regular",
    image: "https://via.placeholder.com/40"
  }
];

const TodayPatients = () => {
  return (
    <div className="todays-patients">
      <h2>Today's Patients</h2>
      <p>Patients you're seeing today</p>

      <div className="patient-list">
        {patients.map((patient, index) => (
          <div key={index} className="patient-card">
            <img src={patient.image} alt={patient.name} className="profile-pic" />

            <div className="patient-details">
              <h4>{patient.name}</h4>
              <p>{patient.age} yrs • {patient.gender}</p>
            </div>

            <p className={`status-tag ${patient.status.replace(/\s/g, '-').toLowerCase()}`}>
              {patient.status}
            </p>

            <div className="action-buttons">
              <button className="history-btn">History</button>
              <button className="examine-btn">Examine</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayPatients;
