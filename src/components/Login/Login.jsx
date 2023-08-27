import React, { useState } from 'react';
import './login.css';
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  function handlePasswordChange(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
  }

 function handleLogin() {

  console.log('Logging in with:', email, password);
   
  setEmail('');
  setPassword('');
}

  function handleGoBack(){
    window.history.back();
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <button className="image-button" onClick={handleGoBack} style={{fontSize: '20px'}}> &larr; Go back</button>
      </div>
      <div className="login-content">
      <div className="login-head"><h2>Data Science & Artificial Intelligence <span>Club</span></h2></div>  
      <div className="login-form">
        <h2>Welcome Back</h2> <h2>Join & Explore Dsaic</h2>
        <div className="input-login">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder=" "
          />
          <label htmlFor="email*" style={{fontSize: '15px'}}>Email*</label>
        </div>
        <div className="input-login">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder=" "
          />
          <label htmlFor="password*" style={{fontSize: '15px'}}>Password*</label>
        </div>
        
        
        <button onClick={handleLogin} style={{fontSize: '20px'}}>Login</button>
        <a href="#">Forgot Password?</a>
      </div>
      <div className="login-register"><p>Do you have an account? <a href="#">Register</a></p></div>
      </div>
    </div>
  );
}

export default Login;