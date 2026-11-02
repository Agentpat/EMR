import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PatientsVisitChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Monthly Patient Visits',
        data: [35, 42, 28, 55, 48, 36, 60, 52, 30, 44, 38, 63], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: "800px", margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PatientsVisitChart;
