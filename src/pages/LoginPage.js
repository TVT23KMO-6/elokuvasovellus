import React, { useState } from 'react';
import axios from 'axios';
import 'react-router-dom';


function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const url = `http://localhost:9090/api/v1/customer/get?email=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
      const response = await axios.get(url);
      const userData = response.data;
      onLogin(userData);
      window.location.href = '/home';

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login-container'>
      <div className="login-form">
        <h2>Sign in to your account</h2>
        <div className="input-container">
          <input type="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className = "login-button" type = "button"onClick={handleLogin}>Login</button>
      </div>
      </div>
  );
}

export default LoginPage;