import React from 'react';
import './Navbar.css';
import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <nav className='navbar'>
      <div className='navbar__content container'>
        <div className='navbar__logo'>
          <span className='navbar__title'>UPENDRA</span>
        </div>
        <div className='navbar__actions'>
          <button 
            className='navbar__menu-btn'
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Menu"
          >
            <MdOutlineMenu size={32}/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;