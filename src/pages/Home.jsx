import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Sidebar from '../components/Sidebar'
import Quote from '../subsections/Quote'

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
        <Quote/>
    </div>
  )
}

export default Home