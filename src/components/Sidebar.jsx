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
        <div className='sidebar-content-item'>sdjvbjfdsvb</div>
        <div className='sidebar-content-item'>dnvccv xcj</div>
        <div className='sidebar-content-item'>xdvc jj </div>
        <div className='sidebar-content-item'>4xvcn cjhkxz cjdc</div>
        <div className='sidebar-content-item'>5zjhczhxcxzh  </div>
        <div className='sidebar-content-item'>asjchbas czzjxcb 6</div>
        <div className='sidebar-content-item'>7sdxjbsad b </div>
        <div className='sidebar-content-item'>ajsbchsajbc</div>
        <div className='sidebar-content-item'>shjcbsac</div>
        <div className='sidebar-content-item'>1absfdd bch 0</div>
        <div className='sidebar-content-item'>1ecewfew1</div>
        <div className='sidebar-content-item'>1ecfewfae 2</div>
        <div className='sidebar-content-item'>rtvrvter</div>
        <div className='sidebar-content-item'>1aevrtetz 4</div>
        <div className='sidebar-content-item'>1retgves5</div>
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