import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="section-register">
      <div className="register-container">
        <div className="register-img-box">
          <a href="/" className="btn-go-back">
            &larr; Go back
          </a>
        </div>
        <div className="register-form-box">
          <h1 className="register-form-title">
            Data Science & Artificial Intelligence<span>Club</span>
          </h1>
          <form className="register-form">
            <div className="register-content">
              <h2 className="register-form-heading">
                Let's start <span>Join & Explore Dsaic</span>
              </h2>

              <input
                type="text"
                id="full name"
                placeholder="Your name"
                required
              />

              <input
                type="email"
                id="email"
                placeholder="Email address"
                required
              />

              <input
                type="tel"
                id="phone number"
                placeholder="Phone number"
                required
              />

              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />

              <button className="btn-register" type="submit">
                Register
              </button>

              <p className="terms-condition">
                By registering an account,you are agreeing to our
                <Link to="#" className="terms-link">
                  Privacy Policy & Dsaic Constitution
                </Link>
              </p>
            </div>
          </form>
          <p className="already-registered">
            Already have an account?
            <Link className="login-link">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
