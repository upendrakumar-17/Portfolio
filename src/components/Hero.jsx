import React from 'react';
import './Hero.css';
import Gabi from '../assets/Gabi.png';

const Hero = () => {
  return (
    <section className='section'>
        <div className='section-background'>
            <img className='section-background-image' src={Gabi} alt="Gabi" />
        </div>
        <div className='section-foreground'>
            <h1 className='hero-title'>Upendra Kumar</h1>
        </div>
    </section>
  )
}

export default Hero