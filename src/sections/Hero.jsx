import React, { useEffect, useState} from 'react';
import './Hero.css';
import Gabi from '../assets/Gabi.png';

const Hero = () => {

    const greetings = [
        "Hey!",
        "Hello!",
        "Hola!",
        "Привет!",
        "こんにちは!",
        "नमस्ते!",
        "Bonjour!",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='section'>
            <div className='section-background'>
                <img className='section-background-image' src={Gabi} alt="Gabi" />
            </div>
            <div className='section-foreground'>
                <div className='hero-container text'>
                    <div className='hero-intro-container'>
                        <div className='hero-greeting'>
                            {greetings[index]}
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
                    <div className='hero-button'>
                        <input type="text" placeholder='Enter your greetings here...' />
                        <button onClick={() => { console.log("greeting button clicked.") }}>--{`>`}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;