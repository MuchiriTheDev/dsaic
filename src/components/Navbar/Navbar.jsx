import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import {BiMenuAltLeft} from 'react-icons/bi';
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="desktop-nav">
        <h2 className="logo">Dsaic</h2>
        <div className="navbar-links">
          <ul>
            <Link className="links" to="/home">
              <li>Home</li>
            </Link>
            <Link className="links" to="/about">
              <li>About</li>
            </Link>
            <Link className="links" to="/team">
              <li>Team</li>
            </Link>
            <Link className="links" to="/hackathons">
              <li>Hackathons</li>
            </Link>
            <Link className="links" to="/resources">
              <li>Resources</li>
            </Link>
            <Link className="links" to="/events">
              <li>Events</li>
            </Link>
          </ul>
        </div>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button">
              <span>Login</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="nav-button">
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="mobile-nav">
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <BiMenuAltLeft />}
        </div>
        <h2 className="logo">DSAIC</h2>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button">
              <span>Login</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="nav-button">
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
