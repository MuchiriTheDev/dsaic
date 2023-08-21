import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <h3>Begin your data science journey</h3>
          <button className="join-dsaic-btn">Join DSAIC</button>
        </div>
        <div className="footer-content">
          <div className="footer-content-card">
            <h4>Your Account</h4>
            <ul>
              <li>Signup</li>
              <li>Login</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Quick Links</h4>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Hackathons</li>
              <li>Team</li>
              <li>Resources</li>
              <li>Events</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Socials</h4>
            <ul>
              <li>Twitter: @dsaic_dekut</li>
              <li>LinkedIn: dsaic_dekut</li>
              <li>Medium: dsaic</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Contacts</h4>
            <ul>
              <li>Email: hellodsaic@dkut.ac.ke</li>
              <li>Phone: +254 000 000</li>
              <li>Address: Private Bag - 10143</li>
              <li>Location: Nyeri-Mweiga Road</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <p>© 2023 DSAIC. All rights reserved.</p>
            </div>
      </div>
    </div>
  );
};

export default Footer;
