import React from 'react';
import DoctorHeaderGreeting from './DoctorHeaderGreeting.jsx';
import DashboardCard from './DashboardCard'; 
import DoctorsDashboardTabs from './DoctorsDashboardTabs.jsx';
import {
  FaCalendarCheck,
  FaFlask,
  FaUserInjured,
  FaTasks,
} from 'react-icons/fa';
import './DoctorsDashboard.css';

function DoctorsDashboard() {
  return (
    <main className="doctors-dashboard">
      <DoctorHeaderGreeting />

      <div className="dashboard-cards">
        <DashboardCard
          icon={FaCalendarCheck}
          title="Appointments"
          highlight="3 urgent"
          number="12"
          description="Today's consultations"
          actionText="View Schedule"
        />
        <DashboardCard
          icon={FaFlask}
          title="Pending Reports"
          highlight="2 ready"
          number="7"
          description="Lab results awaiting review"
          actionText="Review Reports"
        />
        <DashboardCard
          icon={FaUserInjured}
          title="Active Patients"
          highlight="8 new"
          number="143"
          description="Total patient count this week"
          actionText="Patient Records"
        />
        <DashboardCard
          icon={FaTasks}
          title="Pending Tasks"
          highlight="2 high priority"
          number="5"
          description="Tasks requiring attention"
          actionText="View Tasks"
        />
      </div>
       <DoctorsDashboardTabs />
    </main>
  );
}

export default DoctorsDashboard;
