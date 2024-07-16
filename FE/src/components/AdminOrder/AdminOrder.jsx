import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

function AdminOrder() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("mode") === "dark");
  const [sidebarClosed, setSidebarClosed] = useState(localStorage.getItem("status") === "close");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    if (sidebarClosed) {
      document.body.classList.add("close");
    } else {
      document.body.classList.remove("close");
    }
  }, [sidebarClosed]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("mode", !darkMode ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
    localStorage.setItem("status", !sidebarClosed ? "close" : "open");
  };

  return (
    <div className="App">
      <Navbar toggleDarkMode={toggleDarkMode} />
      <Dashboard toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default AdminOrder;