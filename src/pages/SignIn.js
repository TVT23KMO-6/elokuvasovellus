import React from 'react';
import SignInForm from '../components/SignInForm'; // Import the SignInForm component

const SignIn = () => {
  return (
    <div className="signin-popup">
      <div className="signin-container">
        <SignInForm /> {/* Render the SignInForm component */}
      </div>
    </div>
  );
};

export default SignIn;
