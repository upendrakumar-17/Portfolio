import React from 'react';
import './About.css';
import AboutGridBackground from '../components/AboutGridBackground';

const About = () => {
  return (
    <div className='section'>
      <div className='section-background'>
        {/* <AboutGridBackground/> */}
      </div>
      <div className='section-foreground about-foreground'>
        <div className='about-container'>
          <div className='about-heading'>About Me</div>
          <div className='about-content'>
            <div className='about-left'>
              left
            </div>
            <div className='about-right'>
              right
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About