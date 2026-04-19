import React from 'react';
import './Sidebar.css';
import { MdClose } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
      <div className='sidebar-header'>
        <div className='sidebar-title'>upendra kumar</div>
        <button onClick={() => setSidebarOpen(false)}>
          <MdClose size={30} />
        </button>
      </div>

      <div className='sidebar-content'>Content</div>
      <div className='sidebar-footer'>
        <div className='sidebar-heading'>
          MADE BY
        </div>
        <div className='sidebar-title'>
          upendra kumar
        </div>
      </div>
    </div>
  )
}

export default Sidebar