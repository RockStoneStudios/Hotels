import React from 'react';
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import './navbar.css';


const Navbar = () => {
  
    const {user} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className="navContainer">
           <Link to="/" style={{color : 'inherit',textDecoration : 'none'}}>
            <span className='logo'>SopeBooking</span>
           </Link>
           {user ? user.username : (
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <Link to="/login">
                  <button className='navButton' >LogIn</button>
                </Link>
            </div>
           )}
        </div>
    </div>
  )
}

export default Navbar;