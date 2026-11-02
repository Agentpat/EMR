// src/components/dashboard/HeaderGreeting.jsx
import React, { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { FiCalendar, FiDownload } from "react-icons/fi";

import "react-date-range/dist/styles.css"; // main style
import "react-date-range/dist/theme/default.css"; // theme

import "./HeaderGreetings.css";

const HeaderGreeting = ({ userName, onExport }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(2025, 7, 3),
      endDate: new Date(2025, 7, 3),
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const formatDate = (date) =>
    date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  // Close calendar if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-greeting">
      {/* Left: Welcome and subtitle */}
      <div className="header-left">
        <h1 className="welcome-msg">Welcome back, {userName}!</h1>
        <p className="subtitle">Here's what's happening today.</p>
      </div>

      {/* Right: Date selector and export button */}
      <div className="header-right">
        <div
          className="date-input"
          onClick={() => setShowCalendar(!showCalendar)}
          role="button"
          tabIndex={0}
          onKeyDown={() => setShowCalendar(!showCalendar)}
        >
          <FiCalendar className="calendar-icon" />
          <span>
            {formatDate(dateRange[0].startDate)} - {formatDate(dateRange[0].endDate)}
          </span>
        </div>

        <button className="export-button" onClick={onExport}>
          <FiDownload className="download-icon" />
          Export
        </button>

        {showCalendar && (
          <div className="calendar-dropdown" ref={calendarRef}>
            <DateRange
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              maxDate={new Date(2025, 8, 4)}
              months={2}
              direction="horizontal"
              showMonthAndYearPickers={true}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderGreeting;
