import React from "react";
import { FaCalendarAlt, FaEye, FaSync } from "react-icons/fa";
import "./RecentPrescriptions.css";

const prescriptions = [
  {
    name: "Emma Thompson",
    time: "Today, 09:45 AM",
    medications: ["Sumatriptan 50mg, 1 tablet as needed for migraine"]
  },
  {
    name: "Michael Chen",
    time: "Today, 11:20 AM",
    medications: [
      "Lisinopril 10mg, 1 tablet daily",
      "Hydrochlorothiazide 12.5mg, 1 tablet daily"
    ]
  },
  {
    name: "Sophia Rodriguez",
    time: "Yesterday, 10:30 AM",
    medications: [
      "Prenatal vitamins, 1 tablet daily",
      "Folic acid 400mcg, 1 tablet daily"
    ]
  }
];

const RecentPrescriptions = () => {
  return (
    <div className="recent-prescriptions">
      <h2>Recent Prescriptions</h2>
      <p>Prescriptions you've written recently</p>

      <div className="prescription-list">
        {prescriptions.map((item, index) => (
          <div key={index} className="prescription-card">
            <div className="prescription-header">
              <div>
                <h4>{item.name}</h4>
                <div className="timestamp">
                  <FaCalendarAlt className="calendar-icon" />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>

            <ul className="medication-list">
              {item.medications.map((med, idx) => (
                <li key={idx}>{med}</li>
              ))}
            </ul>

            <div className="actions">
              <button className="view-btn">
                <FaEye /> View
              </button>
              <button className="renew-btn">
                <FaSync /> Renew
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPrescriptions;
