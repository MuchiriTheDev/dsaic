import React, { useState } from "react";
import "./register.css";
import { AiOutlineSwapLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswordHash] = useState("");
  const [c_password, setcPassword] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://backend-npyv.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name,
            username,
            email,
            password,
            gender,
            course,
            phone_number,
            c_password
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        navigate("/login");
        alert("registration successful");
      } else {
        const errorData = response.json();
        alert("Registration failed. Please try again.");
        console.log("Registration error: ", errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <form onSubmit={handleSignup}>
            <div className="input-register">
              <input
                type="text"
                id="username"
                placeholder=" "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="username" style={{ fontSize: "14px" }}>
                Username*
              </label>
            </div>
            <div className="input-register">
              <input
                type="text"
                id="name"
                placeholder=" "
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <label htmlFor="name" style={{ fontSize: "14px" }}>
                Full Name*
              </label>
            </div>
            <div className="regform-grid">
              <div className="input-register">
                <select
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  id="gender"
                >
                  <option selected value="">
                    Select your gender
                  </option>
                  <option selected disabled hidden></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other...</option>
                </select>
              </div>
              <div className="input-register">
                <input
                  type="tel"
                  id="phonenumber"
                  placeholder=" "
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <label htmlFor="phonenumber" style={{ fontSize: "14px" }}>
                  Phone Number*
                </label>
              </div>
            </div>
            <div className="input-register">
              <input
                type="text"
                id="course"
                value={course}
                placeholder=" "
                onChange={(e) => setCourse(e.target.value)}
                required
              />
              <label htmlFor="course" style={{ fontSize: "14px" }}>
                Course*
              </label>
            </div>
            <div className="input-register">
              <input
                type="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email" style={{ fontSize: "14px" }}>
                Email*
              </label>
            </div>
            <div className="regform-grid">
              <div className="input-register">
                <input
                  type="password"
                  id="password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPasswordHash(e.target.value)}
                  required
                />
                <label htmlFor="password" style={{ fontSize: "14px" }}>
                  Password*
                </label>
              </div>
              <div className="input-register">
                <input
                  type="password"
                  id="c_password"
                  placeholder=" "
                  value={c_password}
                  onChange={(e) => setcPassword(e.target.value)}
                  required
                />
                <label htmlFor="c_password" style={{ fontSize: "14px" }}>
                  Confirm Password*
                </label>
              </div>
            </div>
            <button type="submit" style={{ fontSize: "16px" }}>
              Register
            </button>
          </form>
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
