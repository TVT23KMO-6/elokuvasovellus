import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';
import SignInForm from '../components/SignInForm'; // Import the SignInForm component

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shows'>Shows</Link>
          </li>
          <li>
            <Link to='/groups'>Groups</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </div>
      {/* Render the SignInForm component for sign-in functionality */}
      <SignInForm />
    </nav>
  );
}

export default Navbar;
