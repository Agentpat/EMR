import React from "react";
import { FaUserMd, FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa";
import "./RecentNotes.css";

const notes = [
  {
    name: "Emma Thompson",
    date: "Today, 09:45 AM",
    note: "Patient presented with persistent headaches for 2 weeks. Prescribed sumatriptan 50mg and recommended follow-up in 2 weeks if symptoms persist."
  },
  {
    name: "Michael Chen",
    date: "Today, 11:20 AM",
    note: "Follow-up for hypertension. BP readings have improved (135/85). Continuing current medication regimen. Advised on dietary modifications."
  },
  {
    name: "James Wilson",
    date: "Yesterday, 02:15 PM",
    note: "Chest pain evaluation. ECG normal. Ordered stress test and lipid panel. Patient to return next week for results discussion."
  }
];

const RecentNotes = () => {
  return (
    <div className="recent-notes">
      <div className="header">
        <h2>Recent Patient Notes</h2>
        <button className="new-note-btn">
          <FaUserMd /> New Note
        </button>
      </div>

      <div className="notes-list">
        {notes.map((item, index) => (
          <div key={index} className="note-card">
            <div className="note-header">
              <div className="note-info">
                <h4>{item.name}</h4>
                <div className="note-date">
                  <FaCalendarAlt className="icon" />
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="note-actions">
                <button className="edit-btn">
                  <FaEdit /> Edit Note
                </button>
                <button className="delete-btn">
                  <FaTrash /> Delete Note
                </button>
              </div>
            </div>
            <p className="note-text">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNotes;
