import React from "react";
import "./PendingTask.css";

const tasks = [
  {
    description: "Review lab results for Emma Thompson",
    time: "Today, 2:00 PM",
    priority: "High"
  },
  {
    description: "Complete medical certificate for James Wilson",
    time: "Today, 4:00 PM",
    priority: "Medium"
  },
  {
    description: "Follow up on Michael Chen's medication",
    time: "Today, 5:00 PM",
    priority: "High"
  },
  {
    description: "Review treatment plan for Sophia Rodriguez",
    time: "Tomorrow, 10:00 AM",
    priority: "Medium"
  },
  {
    description: "Sign off on nurse practitioner notes",
    time: "Tomorrow, 3:00 PM",
    priority: "Low"
  }
];

const PendingTasks = () => {
  return (
    <div className="pending-tasks">
      <h2>Pending Tasks</h2>
      <p>Tasks requiring your attention</p>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <div className="task-info">
              <p className="task-desc">{task.description}</p>
              <span className="task-time">{task.time}</span>
            </div>
            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingTasks;
