import React from 'react';
import './Navbar.css';
import { MdMail } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <div className='navbar-logo'>
            </div>
            <div className='navbar-title'>
                upendra kumar
            </div>
        </div>
        <div className='navbar-right'>
            <div className='nav-link'>
                <button onClick={() => setSidebarOpen(true)}>
                    <MdOutlineMenu size={30}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar