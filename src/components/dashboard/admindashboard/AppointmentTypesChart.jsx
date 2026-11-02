import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './AppointmentTypesChart.css';

const data = [
  { name: 'Check-up', value: 35 },
  { name: 'Consultation', value: 25 },
  { name: 'Follow-up', value: 20 },
  { name: 'Procedure', value: 10 },
  { name: 'Emergency', value: 5 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#8866CC'];

const AppointmentTypes = () => {
  return (
    <div className="analytics-section appointment-types">
      <h2 className="chart-title">Appointment Types</h2>
      <p className="chart-subtitle">Distribution by service category</p>

      <div className="fixed-chart-height">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              label={(entry) => `${entry.name} ${entry.value}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f1f1f',
                borderRadius: '6px',
                color: '#fff',
              }}
            />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ color: '#eee' }}
              iconType="circle"
              height={36}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppointmentTypes;
