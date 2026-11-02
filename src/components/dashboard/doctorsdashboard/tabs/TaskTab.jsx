import React from 'react';
import PendingTask from './PendingTask';
import RecentPrescriptions from './RecentPrescriptions';
import './TaskTab.css';

const TasksTab = () => {
  return (
    <div className="tasks-tab">
      <PendingTask />
      <RecentPrescriptions />
    </div>
  );
};

export default TasksTab;
