import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='/groups'>Groups</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
                <li>
                    <Link to='/login'>Log in</Link>
                </li>
                <li>
                    <Link to='/signup'>Sign up</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}