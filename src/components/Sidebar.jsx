import React from 'react';
import './Sidebar.css';
import { MdClose } from "react-icons/md";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <aside className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
      <div className='sidebar__header'>
        <span className='sidebar__title text-label'>Navigation</span>
        <button 
          className='sidebar__close' 
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Menu"
        >
          <MdClose size={32} />
        </button>
      </div>

      <nav className='sidebar__nav'>
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className='sidebar__link'
            onClick={() => setSidebarOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className='sidebar__footer'>
        <p className='text-label'>Get in touch</p>
        <a href="mailto:hello@upendra.com" className='sidebar__email'>
          hello@upendra.com
        </a>
      </div>
    </aside>
  )
}

export default Sidebar;