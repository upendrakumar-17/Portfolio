import React from 'react';
import './About.css';
import Section from '../layout/Section';

const About = () => {
  return (
    <Section 
      variant="full" 
      className="about"
      background={null}
    >
      <div className='about__content container'>
        <div className='about__header'>
          <span className='text-label'>ABOUT ME</span>
          <h2 className='text-h1'>A designer with a passion for clean code.</h2>
        </div>
        
        <div className='about__grid'>
          <div className='about__text'>
            <p className='text-body'>
              I specialize in creating high-performance digital products that are as beautiful as they are functional. With a focus on minimalist design and scalable architecture.
            </p>
          </div>
          <div className='about__info'>
            <div className='about__stat'>
              <span className='text-h2'>03+</span>
              <span className='text-label'>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About;