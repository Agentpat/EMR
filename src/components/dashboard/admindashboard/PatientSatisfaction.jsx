import React from 'react';
import './PatientSatisfaction.css';

const satisfactionData = [
  { label: 'Overall Experience', value: 87 },
  { label: 'Wait Times', value: 72 },
  { label: 'Staff Friendliness', value: 94 },
  { label: 'Treatment Effectiveness', value: 89 },
];

const PatientSatisfaction = () => {
  return (
    <section className="analytics-section patient-satisfaction">
      <h2 className="chart-title">Patient Satisfaction</h2>
      <p className="chart-subtitle">Based on feedback surveys</p>
      <ul className="satisfaction-list">
        {satisfactionData.map(({ label, value }) => (
          <li key={label} className="satisfaction-item">
            <div className="label-row">
              <span className="label">{label}</span>
              <span className="percent-text">{value}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${value}%` }}
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span className="bar-label">{value}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientSatisfaction;
