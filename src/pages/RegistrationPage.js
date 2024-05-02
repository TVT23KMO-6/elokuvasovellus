import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function RegistrationPage() {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async () => {
    try {
      const userData = {
        username,
        password
      };

      const response = await axios.post('http://localhost:9090/api/v1/customer/add', userData);
      console.log('User registered:', response.data);

      setRegistrationSuccess(true);

    } catch (error) {
      console.error('Registration error:', error);
    }
    
  };

  if (registrationSuccess) {
    return (
    <div className='centered-container'>
      <div className="login-container">
      <h1>Registreation Succesfull!</h1>
      <h2> </h2>
      <div className="registration-link">
        <p> Already have an account <a href="/signin">Login here</a></p>
      </div>
      </div>
    </div>);
  }

  return (
    <div className="centered-container">
    <div className="login-container">
      <h2>Registration</h2>
      <div className="input-container">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-container">
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="login-button" onClick={handleRegistration}>Register</button>
      <div className="login-link">
        <p className='registration-link'>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
    </div>
  );
}

export default RegistrationPage;
