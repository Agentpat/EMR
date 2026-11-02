import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import './PatientDemographicsChart.css';

const data = [
  { ageGroup: '0-17', Male: 150, Female: 130 },
  { ageGroup: '25-34', Male: 210, Female: 190 },
  { ageGroup: '45-54', Male: 160, Female: 180 },
  { ageGroup: '65+', Male: 80, Female: 90 },
];

const PatientDemographics = () => {
  return (
    <div className="analytics-section patient-demographics">
      <h2 className="chart-title">Patient Demographics</h2>
      <p className="chart-subtitle">Age and gender distribution</p>

      {/* Fixed height wrapper */}
      <div className="fixed-chart-height">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 15, right: 30, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="ageGroup" stroke="#bbb" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f1f1f',
                borderRadius: '6px',
                border: 'none',
                color: '#fff',
              }}
            />
            <Legend wrapperStyle={{ color: '#eee' }} />
            <Bar dataKey="Male" fill="#1976d2" barSize={20} radius={[6, 6, 0, 0]} />
            <Bar dataKey="Female" fill="#d81b60" barSize={20} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PatientDemographics;
