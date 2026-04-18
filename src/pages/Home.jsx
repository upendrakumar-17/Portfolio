import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    console.log(sidebarOpen);
  }, [sidebarOpen]);

  return (
    <div>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Hero/>
        {sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
    </div>
  )
}

export default Home