import React, { useState } from "react";
import "./register.css";
import { AiOutlineSwapLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-image">
        <Link to="/" className="reglinks">
          <button className="image-button" style={{ fontSize: "16px" }}>
            <AiOutlineSwapLeft /> Go back
          </button>
        </Link>
      </div>
      <div className="register-content">
        <div className="register-head">
          <h3>
            Data Science & Artificial Intelligence <span>Club</span>
          </h3>
        </div>
        <div className="register-form">
          <h4>
            Let's Start <span>Join & Explore Dsaic</span>
          </h4>
          <div className="input-register">
            <input type="text" id="name" placeholder=" " required />
            <label htmlFor="name" style={{ fontSize: "14px" }}>
              Full Name*
            </label>
          </div>
          <div className="input-register">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email" style={{ fontSize: "14px" }}>
              Email*
            </label>
          </div>
          <div className="input-register">
            <input type="tel" id="phonenumber" placeholder=" " required />
            <label htmlFor="phonenumber" style={{ fontSize: "14px" }}>
              Phone Number*
            </label>
          </div>
          <div className="input-register">
            <input type="password" id="password" placeholder=" " required />
            <label htmlFor="password" style={{ fontSize: "14px" }}>
              Password*
            </label>
          </div>
          <div className="input-register">
            <input
              type="password"
              id="confirmpassword"
              placeholder=" "
              required
            />
            <label htmlFor="confirmpassword" style={{ fontSize: "14px" }}>
              Confirm Password*
            </label>
          </div>
          <button type="submit" style={{ fontSize: "16px" }}>
            Register
          </button>
          <p className="terms-condition">
            By registering an account,you are agreeing to our
            <Link to="#" className="terms-link">
              Privacy Policy & Dsaic Constitution
            </Link>
          </p>
        </div>
        <div className="register-login">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
