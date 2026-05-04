import React from 'react';
import './Hero.css';
import Gabi from '../assets/Gabi.png';
import TypingGreeting from '../components/TypingGreeting';

const Hero = () => {

    return (
        <section className='section'>
            <div className='section-background'>
                <img className='section-background-image' src={Gabi} alt="Gabi" />
            </div>
            <div className='section-foreground'>
                <div className='hero-container text'>
                    <div className='hero-intro-container'>
                        <div className='hero-greeting'>
                            <TypingGreeting />
                        </div>
                        <div className='hero-intro'>
                            I am
                        </div>
                    </div>
                    <div className='hero-name'>
                        <div className='hero-firstname'>
                            <h1>UPENDRA</h1>
                        </div>
                        <div className='hero-lastname'>
                            <h2>KUMAR</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;