import React from 'react';
import './RevenueSources.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

const data = [
  { department: 'Orthopedics', revenue: 7000 },
  { department: 'Neurology', revenue: 14000 },
  { department: 'Oncology', revenue: 11000 },
];

const RevenueSources = () => {
  return (
    <section className="analytics-section revenue-sources">
      <h2>Revenue Sources</h2>
      <p>Breakdown by department</p>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 15, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid stroke="#333" strokeDasharray="5 5" />
          <XAxis dataKey="department" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', borderRadius: '6px' }} />
          <Legend wrapperStyle={{ color: '#eee' }} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={{ stroke: '#82ca9d', strokeWidth: 2, r: 5, fill: '#2e7d32' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default RevenueSources;
