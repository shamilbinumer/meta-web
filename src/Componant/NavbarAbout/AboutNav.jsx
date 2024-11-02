import React, { useState } from 'react'
import './AboutNav.scss'
import { Link } from 'react-router-dom';

const AboutNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div className='About-navbar'>
       <div className='Navbar-main-body'>
      <div className="Navbar-sub-body">


<nav className="navbar">
            <div className="logo">
                <img src="/Images/FLML-01 copy.png" alt="First Logic Logo"/>
              
            </div>

            <div className="toggle-button" onClick={handleToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li className='nav-li'><Link to='/'>Home</Link></li>
                <li className='nav-li'><Link to='/aboutPage'>About Us</Link></li>
                <li className='nav-li'><Link to=''>Services</Link></li>
                <li className='nav-li'><Link to=''>Technology</Link></li>
                <li className='nav-li'><Link to=''>Case Studies</Link></li>
                <li className='nav-li'><Link to=''>Career</Link></li>
                <li className='nav-li'><Link to='/contact'>Contact Us</Link></li>
                <li><button className="register-btn">Register</button></li>
            </ul>
        </nav>
      </div>

      
    </div>
    </div>
  )
}

export default AboutNav
