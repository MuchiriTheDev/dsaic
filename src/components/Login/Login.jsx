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
      <div className="login-head">
        <h1>Data Science & Artificial Intelligence <span>Club</span></h1>
      </div>  
      <div className="login-form">
        <h1>Welcome Back <span>Join & Explore Dsaic</span></h1>
      <div className="input-login">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder=" "
            required
          />
          <label htmlFor="email" style={{fontSize: '18px'}}>Email*</label>
        </div>
        <div className="input-login">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder=" "
            required
          />
          <label htmlFor="password" style={{fontSize: '18px'}}>Password*</label>
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