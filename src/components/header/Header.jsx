import React from 'react';
import { FiMenu, FiBell } from 'react-icons/fi';
import './Header.css';

const Header = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className={`emr-header ${isSidebarOpen ? 'shifted' : ''}`}>
      <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle Sidebar">
        <FiMenu />
      </button>

      <div className="header-right">
        <button className="notification-btn" aria-label="Notifications">
          <FiBell />
        </button>
        <img className="profile-pic" src="/images/avatar.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
