import React from 'react';
import './Sidebar.css';
import { MdClose } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-header'>
          <div>Upendra Kumar</div>
          <div onClick={() => setSidebarOpen(false)}>
            <MdClose/>
          </div>
        </div>
        
        <div className='sidebar-content'>Content</div>
        <div className='sidebar-footer'>Made by UPENDRA KUMAR</div>
    </div>
  )
}

export default Sidebar