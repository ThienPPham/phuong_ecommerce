import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav>
      <div className="logo-name">
        <div className="logo-image">
          <img src="images/logo.png" alt="" />
        </div>
        <span className="logo_name">CodingLab</span>
      </div>

      <div className="menu-items">
        <ul className="nav-links">
          <li><a href="#"><i className="uil uil-estate"></i><span className="link-name">Dashboard</span></a></li>
          <li><a href="#"><i className="uil uil-files-landscapes"></i><span className="link-name">Content</span></a></li>
          <li><a href="#"><i className="uil uil-chart"></i><span className="link-name">Analytics</span></a></li>
          <li><a href="#"><i className="uil uil-thumbs-up"></i><span className="link-name">Like</span></a></li>
          <li><a href="#"><i className="uil uil-comments"></i><span className="link-name">Comment</span></a></li>
          <li><a href="#"><i className="uil uil-share"></i><span className="link-name">Share</span></a></li>
        </ul>

        <ul className="logout-mode">
          <li><a href="#"><i className="uil uil-signout"></i><span className="link-name">Logout</span></a></li>
          <li className="mode">
            <a href="#"><i className="uil uil-moon"></i><span className="link-name">Dark Mode</span></a>
            <div className="mode-toggle" onClick={toggleDarkMode}>
              <span className="switch"></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;