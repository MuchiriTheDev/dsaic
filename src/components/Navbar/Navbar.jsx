import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
  );
};

export default Navbar;
