import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';


const navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
           <Link to="/" style={{color : 'inherit',textDecoration : 'none'}}>
            <span className='logo'>SopeBooking</span>
           </Link>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>LogIn</button>
            </div>
        </div>
    </div>
  )
}

export default navbar