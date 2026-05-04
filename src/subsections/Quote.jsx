import React, { useState, useEffect } from 'react';
import './Quote.css';
import LiquidMetal from '../components/LiquidMetal';
import Section from '../layout/Section';

const Quote = () => {
  const words = [
    "FOCUS", "DETERMINATION", "PASSION", "DEDICATION",
    "COMMITMENT", "RESILIENCE", "PERSEVERANCE",
    "DISCIPLINE", "AMBITION", "DRIVE", "GRIT"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); 
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Section 
      variant="partial" 
      background={<LiquidMetal />}
      className="quote"
    >
      <div className='quote__content container'>
        <div className='quote__wrapper'>
          <span className='text-label'>A MAN OF</span>
          <div className={`quote__word text-h1 ${fade ? 'fade-in' : 'fade-out'}`}>
            {words[index]}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Quote;
