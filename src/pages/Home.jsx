import {React, useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Sidebar from '../components/Sidebar'
import Quote from '../subsections/Quote'
import About from '../sections/About'

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    console.log(sidebarOpen);
  }, [sidebarOpen]);

  return (
    <div>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Hero/>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Quote/>
        <About/>
    </div>
  )
}

export default Home