import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { BiMenuAltLeft } from "react-icons/bi";
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isMobileMenuOpen) {
        event.preventDefault();
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", handleScroll);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

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
          {isMobileMenuOpen ? (
            <LiaTimesSolid size={24} />
          ) : (
            <BiMenuAltLeft size={24} />
          )}
          {isMobileMenuOpen && (
            <div className="card-links">
              <ul>
                <li>
                  <Link className="links" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/hackathons">
                    Hackathons
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/resources">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/events">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <h2 className="logo">DSAIC</h2>
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button">
              <span>Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
