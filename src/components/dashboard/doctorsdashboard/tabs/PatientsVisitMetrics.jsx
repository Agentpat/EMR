import React from 'react';
import './PatientsVisitMetrics.css';
import { FaArrowUp } from 'react-icons/fa';

const metrics = [
  {
    title: 'Avg. Daily',
    value: '12.4',
    change: '+2.1 from last month',
  },
  {
    title: 'Total Monthly',
    value: '248',
    change: '+42 from last month',
  },
  {
    title: 'Yearly Trend',
    value: '+8.3%',
    change: 'Year over year growth',
  }
];

const PatientsVisitMetrics = () => {
  return (
    <div className="patients-visit-metrics">
      {metrics.map((metric, index) => (
        <div className="metric-card" key={index}>
          <h4>{metric.title}</h4>
          <div className="metric-value">
            <span>{metric.value}</span>
            <FaArrowUp className="trend-icon" />
          </div>
          <p className="metric-change">{metric.change}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientsVisitMetrics;
