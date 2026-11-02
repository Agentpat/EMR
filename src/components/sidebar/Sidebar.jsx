import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronUp,
  FiGrid,
  FiUser,
  FiCalendar,
  FiBarChart2,
  FiUsers,
  FiClipboard,
  FiTruck,
  FiShoppingCart,
  FiHome,
  FiFileText,
  FiLock,
  FiSettings,
  FiLogIn,
  FiEdit,
  FiMail,
  FiMessageCircle,
  FiHelpCircle,
  FiPackage,
  FiLink,
} from "react-icons/fi";

import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const getArrow = (menu) =>
    activeMenu === menu ? <FiChevronUp /> : <FiChevronDown />;

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo">🩺 EMR System</div>

      <nav className="sidebar-nav">
        {/* DASHBOARD */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("dashboard")}
            className="sidebar-link"
          >
            <FiGrid className="icon" />
            Dashboard
            <span className="arrow-icon">{getArrow("dashboard")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "dashboard" ? "open" : ""
            }`}
          >
            <Link to="/dashboard/admin">Admin Dashboard</Link>
            <Link to="/dashboard/doctor">Doctor Dashboard</Link>
            <Link to="/dashboard/patient">Patient Dashboard</Link>
          </div>
        </div>

        {/*DOCTORS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("doctors")}
            className="sidebar-link"
          >
            <FiUsers className="icon" />
            Doctors
            <span className="arrow-icon">{getArrow("doctors")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "doctors" ? "open" : ""
            }`}
          >
            <Link to="/dashboard/doctors-list">Doctors List </Link>
            <Link to="/dashboard/add-doctor">Add Doctor</Link>
            <Link to="/dashboard/specialization">Specialization</Link>
          </div>
        </div>

        {/* PATIENTS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("patients")}
            className="sidebar-link"
          >
            <FiUser className="icon" />
            Patients
            <span className="arrow-icon">{getArrow("patients")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "patients" ? "open" : ""
            }`}
          >
            <Link to="/patients/list">All Patients</Link>
            <Link to="/patients/new">Add New Patient</Link>
          </div>
        </div>

        {/* APPOINTMENTS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("appointments")}
            className="sidebar-link"
          >
            <FiCalendar className="icon" />
            Appointments
            <span className="arrow-icon">{getArrow("appointments")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "appointments" ? "open" : ""
            }`}
          >
            <Link to="/appointments/view">View Appointments</Link>
            <Link to="/appointments/schedule">Schedule Appointment</Link>
          </div>
        </div>

        {/* REPORTS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("reports")}
            className="sidebar-link"
          >
            <FiBarChart2 className="icon" />
            Reports
            <span className="arrow-icon">{getArrow("reports")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "reports" ? "open" : ""
            }`}
          >
            <Link to="/reports/daily">Daily Report</Link>
            <Link to="/reports/monthly">Monthly Report</Link>
          </div>
        </div>

        {/* PRESCRIPTION */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("prescription")}
            className="sidebar-link"
          >
            <FiLink className="icon" />
            Prescription
            <span className="arrow-icon">{getArrow("prescription")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "prescription" ? "open" : ""
            }`}
          >
            <Link to="/prescription/list">All Prescriptions</Link>
            <Link to="/prescription/add">Add Prescription</Link>
          </div>
        </div>

        {/* AMBULANCE */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("ambulance")}
            className="sidebar-link"
          >
            <FiTruck className="icon" />
            Ambulance
            <span className="arrow-icon">{getArrow("ambulance")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "ambulance" ? "open" : ""
            }`}
          >
            <Link to="/ambulance/ambulance-call">Ambulance Call</Link>
            <Link to="/ambulance/ambulance-list">Ambulance List</Link>
            <Link to="/ambulance/ambulance-details">Ambulance Details</Link>
          </div>
        </div>

        {/* PHARMACY */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("pharmacy")}
            className="sidebar-link"
          >
            <FiShoppingCart className="icon" />
            Pharmacy
            <span className="arrow-icon">{getArrow("pharmacy")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "pharmacy" ? "open" : ""
            }`}
          >
            <Link to="/pharmacy/inventory">Inventory</Link>
            <Link to="/pharmacy/requests">Medicine Requests</Link>
          </div>
        </div>

        {/* BLOOD BANK */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("bloodbank")}
            className="sidebar-link"
          >
            <FiHome className="icon" />
            Blood Bank
            <span className="arrow-icon">{getArrow("bloodbank")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "bloodbank" ? "open" : ""
            }`}
          >
            <Link to="/bloodbank/blood-stock">Blood Stock</Link>
            <Link to="/bloodbank/blood-donor">Blood Donor</Link>
            <Link to="/bloodbank/blood-issued">Blood Issued</Link>
            <Link to="/bloodbank/add-blood-unit">Add Blood Unit</Link>
            <Link to="/bloodbank/issue-blood">Issue Blood</Link>
          </div>
        </div>

        {/* BILLING */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("billing")}
            className="sidebar-link"
          >
            <FiFileText className="icon" />
            Billing
            <span className="arrow-icon">{getArrow("billing")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "billing" ? "open" : ""
            }`}
          >
            <Link to="/billing/invoices-list">Invoices List</Link>
            <Link to="/billing/create-invoice">Create Invoice</Link>
            <Link to="/billing/payment-history">Payment History</Link>
            <Link to="/billing/insurance-claims">Insurance Claims</Link>
          </div>
        </div>

        {/* DEPARTMENTS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("departments")}
            className="sidebar-link"
          >
            <FiUsers className="icon" />
            Departments
            <span className="arrow-icon">{getArrow("departments")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "departments" ? "open" : ""
            }`}
          >
            <Link to="/departments/department-ist">Department List</Link>
            <Link to="/departments/add-department">Add Department</Link>
            <Link to="/departments/service-offered">Service Offered</Link>
          </div>
        </div>

        {/* INVENTORY */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("inventory")}
            className="sidebar-link"
          >
            <FiPackage className="icon" />
            Inventory
            <span className="arrow-icon">{getArrow("inventory")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "inventory" ? "open" : ""
            }`}
          >
            <Link to="/inventory/inventory-list">Inventory List </Link>
            <Link to="/inventory/add-item"> Add Item</Link>
            <Link to="/inventory/stock-alerts">Stock Alerts</Link>
            <Link to="/inventory/suppliers-list">Suppliers List</Link>
          </div>
        </div>

        {/* STAFF */}
        <div className="sidebar-item">
          <button onClick={() => toggleMenu("staff")} className="sidebar-link">
            <FiUsers className="icon" />
            Staff
            <span className="arrow-icon">{getArrow("staff")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "staff" ? "open" : ""
            }`}
          >
            <Link to="/staff/all-staff"> All Staff</Link>
            <Link to="/staff/add-staff">Add Staff</Link>
            <Link to="/staff/roleandpermission">Role & Permission</Link>
            <Link to="/staff/attendance">Attendance</Link>
          </div>
        </div>

        {/* RECORDS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("records")}
            className="sidebar-link"
          >
            <FiFileText className="icon" />
            Records
            <span className="arrow-icon">{getArrow("records")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "records" ? "open" : ""
            }`}
          >
            <Link to="/records/birth-record">Birth Record</Link>
            <Link to="/records/death-record">Death Record</Link>
          </div>
        </div>

        {/* ROOM ALLOTMENT */}
        <div className="sidebar-item">
          <button onClick={() => toggleMenu("roles")} className="sidebar-link">
            <FiLock className="icon" />
            Room Allotment
            <span className="arrow-icon">{getArrow("roles")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "roles" ? "open" : ""
            }`}
          >
            <Link to="/roles/list">Alloted Rooms</Link>
            <Link to="/roles/list">New Allotment</Link>
            <Link to="/roles/list">Rooms By Department</Link>
            <Link to="/roles/assign">Add New Room</Link>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("reviews")}
            className="sidebar-link"
          >
            <FiClipboard className="icon" />
            Reviews
            <span className="arrow-icon">{getArrow("reviews")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "reviews" ? "open" : ""
            }`}
          >
            <Link to="/reviews/patient">Patient Reviews</Link>
            <Link to="/reviews/doctor">Doctor Reviews</Link>
          </div>
        </div>

        {/* FEEDBACK */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("feedback")}
            className="sidebar-link"
          >
            <FiMessageCircle className="icon" />
            Feedback
            <span className="arrow-icon">{getArrow("feedback")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "feedback" ? "open" : ""
            }`}
          >
            <Link to="/feedback/list">Feedback List</Link>
          </div>
        </div>

        {/* SETTINGS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("settings")}
            className="sidebar-link"
          >
            <FiSettings className="icon" />
            Settings
            <span className="arrow-icon">{getArrow("settings")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "settings" ? "open" : ""
            }`}
          >
            <Link to="/settings/general">General Settings</Link>
            <Link to="/settings/notification">Notification</Link>
            <Link to="/settings/working-hours">Working Hours</Link>
            <Link to="/settings/integrations">Integrations</Link>
          </div>
        </div>

        {/* AUTHENTICATION */}
        <div className="sidebar-item">
          <button onClick={() => toggleMenu("auth")} className="sidebar-link">
            <FiLogIn className="icon" />
            Authentication
            <span className="arrow-icon">{getArrow("auth")}</span>
          </button>
          <div
            className={`submenu-wrapper ${activeMenu === "auth" ? "open" : ""}`}
          >
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
            <Link to="/auth/forgot-password">Forgot Password</Link>
            <Link to="/auth/Profile Settings">Profile Settings</Link>
          </div>
        </div>

        {/* CALENDAR */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("calendar")}
            className="sidebar-link"
          >
            <FiCalendar className="icon" />
            Calendar
            <span className="arrow-icon">{getArrow("calendar")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "calendar" ? "open" : ""
            }`}
          >
            <Link to="/calendar/schedule">Schedule</Link>
          </div>
        </div>

        {/* TASKS */}
        <div className="sidebar-item">
          <button onClick={() => toggleMenu("tasks")} className="sidebar-link">
            <FiEdit className="icon" />
            Tasks
            <span className="arrow-icon">{getArrow("tasks")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "tasks" ? "open" : ""
            }`}
          >
            <Link to="/tasks/list">All Tasks</Link>
            <Link to="/tasks/add">Add Task</Link>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("contacts")}
            className="sidebar-link"
          >
            <FiUsers className="icon" />
            Contacts
            <span className="arrow-icon">{getArrow("contacts")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "contacts" ? "open" : ""
            }`}
          >
            <Link to="/contacts/list">All Contacts</Link>
          </div>
        </div>

        {/* EMAIL */}
        <div className="sidebar-item">
          <button onClick={() => toggleMenu("email")} className="sidebar-link">
            <FiMail className="icon" />
            Email
            <span className="arrow-icon">{getArrow("email")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "email" ? "open" : ""
            }`}
          >
            <Link to="/email/inbox">Inbox</Link>
            <Link to="/email/compose">Compose</Link>
          </div>
        </div>

        {/* CHAT */}
        <div className="sidebar-item">
          <button onClick={() => toggleMenu("chat")} className="sidebar-link">
            <FiMessageCircle className="icon" />
            Chat
            <span className="arrow-icon">{getArrow("chat")}</span>
          </button>
          <div
            className={`submenu-wrapper ${activeMenu === "chat" ? "open" : ""}`}
          >
            <Link to="/chat/rooms">Chat Rooms</Link>
          </div>
        </div>

        {/* SUPPORT */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("support")}
            className="sidebar-link"
          >
            <FiHelpCircle className="icon" />
            Support
            <span className="arrow-icon">{getArrow("support")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "support" ? "open" : ""
            }`}
          >
            <Link to="/support/tickets">Support Tickets</Link>
          </div>
        </div>

        {/* WIDGETS */}
        <div className="sidebar-item">
          <button
            onClick={() => toggleMenu("widgets")}
            className="sidebar-link"
          >
            <FiGrid className="icon" />
            Widgets
            <span className="arrow-icon">{getArrow("widgets")}</span>
          </button>
          <div
            className={`submenu-wrapper ${
              activeMenu === "widgets" ? "open" : ""
            }`}
          >
            <Link to="/widgets/overview">Overview</Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
