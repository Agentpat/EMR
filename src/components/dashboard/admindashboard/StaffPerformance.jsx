import React from 'react';
import './StaffPerformance.css';

const staff = [
  {
    initial: 'S',
    name: 'Dr. Sarah Chen',
    role: 'Cardiologist',
    patients: 42,
    rating: 4.9,
    image: '/images/staff/sarah-chen.jpg', // example image path
  },
  {
    initial: 'M',
    name: 'Dr. Michael Rodriguez',
    role: 'Pediatrician',
    patients: 38,
    rating: 4.8,
    image: '/images/staff/michael-rodriguez.jpg',
  },
  {
    initial: 'E',
    name: 'Dr. Emily Johnson',
    role: 'Neurologist',
    patients: 35,
    rating: 4.7,
    image: '/images/staff/emily-johnson.jpg',
  },
  {
    initial: 'R',
    name: 'Nurse Robert Kim',
    role: 'Head Nurse',
    patients: 56,
    rating: 4.9,
    image: '/images/staff/robert-kim.jpg',
  },
];

const StaffPerformance = () => {
  return (
    <section className="analytics-section staff-performance">
      <h2>Staff Performance</h2>
      <p>Top performing staff members</p>
      <div className="staff-cards">
        {staff.map(({ initial, name, role, patients, rating, image }) => (
          <div key={name} className="staff-card">
            {/* Image or fallback initial */}
            {image ? (
              <img
                src={image}
                alt={name}
                className="staff-avatar"
                onError={(e) => { e.target.onerror = null; e.target.src = `/images/staff-placeholder.png`; }}
              />
            ) : (
              <div className="staff-initial">{initial}</div>
            )}

            <div className="staff-details">
              <div className="name-patients">
                <h3 className="staff-name">{name}</h3>
                <p className="staff-patients">{patients} patients</p>
              </div>
              <div className="role-rating">
                <p className="staff-role">{role}</p>
                <p className="staff-rating">Rating: {rating}/5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffPerformance;
