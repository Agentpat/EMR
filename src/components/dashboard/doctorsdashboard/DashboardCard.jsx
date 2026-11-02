// src/components/dashboard/doctorsdashboard/DashboardCard.js
import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({
  icon: Icon,
  title,
  highlight,
  number,
  description,
  actionText,
}) => {
  return (
    <div className="dashboard-card">
      <div className="content">
        <div className="header">
          <div className="icon">
            <Icon />
          </div>
          <h4>{title}</h4>
          <p className="highlight">{highlight}</p>
        </div>

        <h2>{number}</h2>
        <p className="description">{description}</p>
        <button className="action-button">{actionText}</button>
      </div>
    </div>
  );
};

export default DashboardCard;
