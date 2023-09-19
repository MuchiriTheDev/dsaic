import React, { useState } from 'react';
import './login.css';
import { AiOutlineSwapLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
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
      <Link to="/signup" className='reglinks'><button className="image-button" onClick={handleGoBack} style={{fontSize: '16px'}}><AiOutlineSwapLeft /> Go back</button></Link>
      </div>
      <div className="login-content">
      
      <div className="login-head">
        <h3>Data Science & Artificial Intelligence <span>Club</span></h3>
      </div>  
      <div className="login-form">
        <h4>Welcome Back <span>Join & Explore Dsaic</span></h4>
      <div className="input-login">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder=" "
            required
          />
          <label htmlFor="email" style={{fontSize: '14px'}}>Email*</label>
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
          <label htmlFor="password" style={{fontSize: '14px'}}>Password*</label>
        </div>
        <button type="submit" onClick={handleLogin} style={{fontSize: '16px'}}>Login</button>
        <a href="/">Forgot Password?</a>
      </div>
      <div className="login-register"><p>Do you have an account? <a href="/signup">Register</a></p></div>
      </div>
    </div>
  );
}

export default Login;