import React from "react";
import TodaySchedule from "./TodaySchedule";
import UpcomingAppointments from "./UpcomingAppointments";
import "./ScheduleTab.css";

const ScheduleTab = () => {
  return (
    <div className="schedule-tab">
      <TodaySchedule />
      <UpcomingAppointments />
    </div>
  );
};

export default ScheduleTab;
