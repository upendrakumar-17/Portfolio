import React from 'react';
import './Sidebar.css';
import { MdClose } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
      <div className='sidebar-header'>
        <div className='sidebar-title'>upendra kumar</div>
        <button className='sidebar-close' onClick={() => setSidebarOpen(false)}>
          <MdClose size={30} />
        </button>
      </div>

      <div className='sidebar-content'>
        <div className='sidebar-content-item'>one</div>
        <div className='sidebar-content-item'>two </div>
        <div className='sidebar-content-item'>three  </div>
        <div className='sidebar-content-item'>four</div>
        <div className='sidebar-content-item'>five  </div>
        <div className='sidebar-content-item'>six</div>
        <div className='sidebar-content-item'>seven</div>
        <div className='sidebar-content-item'>eight</div>
        <div className='sidebar-content-item'>nine</div>
        <div className='sidebar-content-item'>ten</div>
        <div className='sidebar-content-item'>eleven</div>
        <div className='sidebar-content-item'>twelve</div>
        <div className='sidebar-content-item'>thirteen</div>
        <div className='sidebar-content-item'>fourteen</div>
        <div className='sidebar-content-item'>fifteen</div>
      </div>
      <div className='sidebar-footer'>
        <div className='sidebar-heading'>
          MADE BY <span className='heart'>❤</span>
        </div>
        <div className='sidebar-title'>
          upendra kumar
        </div>
      </div>
    </div>
  )
}

export default Sidebar