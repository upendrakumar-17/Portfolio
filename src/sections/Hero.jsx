import React from 'react';
import './Hero.css';
import Gabi from '../assets/Gabi.png';
import TypingGreeting from '../components/TypingGreeting';
import Section from '../layout/Section';

const Hero = () => {
    return (
        <Section 
            variant="full" 
            background={<img className='section__background-image' src={Gabi} alt="Gabi" />}
        >
            <div className='hero container'>
                <div className='hero__intro'>
                    <div className='hero__greeting'>
                        <TypingGreeting />
                    </div>
                    <span className='text-label'>BASED IN INDIA</span>
                </div>
                
                <div className='hero__name'>
                    <h1 className='text-hero'>UPENDRA</h1>
                    <h1 className='text-hero hero__lastname'>KUMAR</h1>
                </div>

                <div className='hero__footer'>
                    <p className='text-body'>
                        Creative Developer & Designer crafting high-end digital experiences.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default Hero;
