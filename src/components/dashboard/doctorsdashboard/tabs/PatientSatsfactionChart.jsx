import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PatientSatisfactionChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Satisfaction (%)',
        data: [85, 87, 82, 90, 88, 86, 91, 89, 87, 92, 90, 93],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3,
        pointBackgroundColor: '#007bff',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Patient Satisfaction Over Time' },
    },
    scales: {
      y: { min: 60, max: 100, ticks: { stepSize: 10 } },
    },
  };

  return (
    <div className="patient-satisfaction-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default PatientSatisfactionChart;
