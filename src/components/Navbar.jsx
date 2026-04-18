import React from 'react';
import './Navbar.css';
import { MdOutlineMenu } from "react-icons/md";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <div>
                Logo
            </div>
            <div>
                Upendra Kumar
            </div>
        </div>
        <div className='navbar-right'>
            <div>
                Github
            </div>
            <div onClick={() => setSidebarOpen(true)}>
                <MdOutlineMenu/>
            </div>
        </div>
    </div>
  )
}

export default Navbar