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
                <div className='hero-text'>
                    <h4 className='text hero-greeting'>Hey!</h4>
                    <h3 className='text hero-intro'>I' am</h3>
                    <div className='text hero-name'>
                        UPENDRA
                    </div>
                    <div className='text hero-name'>
                        KUMAR
                    </div>
                </div>
                <div className='text hero-greeting-button'>
                    Greet!!!
                </div>
            </div>
        </section>
    )
}

export default Hero