import React, { useState } from 'react';
import './SignInForm.css'; // Import CSS file for styling

const SignInForm = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false); // State variable to control the visibility of the sign-in popup

  const openSignIn = () => {
    setIsSignInOpen(true);
  };

  const closeSignIn = () => {
    setIsSignInOpen(false);
  };

  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Signing in with:', { username, password }); // Log the sign-in details
    closeSignIn(); // Close the sign-in popup
  };

  return (
    <div>
      {/* Sign-in button */}
      <div className="signin-button" onClick={openSignIn}>Sign In</div>
      {/* Sign-in popup */}
      {isSignInOpen && (
        <div className="signin-popup">
          {/* Close button to close the popup */}
          <button className="close-button" onClick={closeSignIn}>X</button>
          <h2>Sign In</h2>
          {/* Sign-in form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username or Email:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state on change
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state on change
              />
            </div>
            <button type="submit">Sign In</button> {/* Submit button */}
          </form>
        </div>
      )}
    </div>
  );
};

export default SignInForm;