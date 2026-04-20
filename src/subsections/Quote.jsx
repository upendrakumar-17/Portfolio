import React, { useState, useEffect } from 'react';
import './Quote.css';
import LiquidMetal from '../components/LiquidMetal';

const Quote = () => {
  const words = [
    "FOCUS", "DETERMINATION", "PASSION", "DEDICATION",
    "COMMITMENT", "RESILIENCE", "PERSEVERANCE",
    "DISCIPLINE", "AMBITION", "DRIVE", "GRIT", "AMBITION"
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // fade in
      }, 400); // match CSS duration
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className='subsection'>
      <div className='subsection-background'>
        <LiquidMetal />
      </div>
      <div className='subsection-foreground'>
        <div className='quote-container'>
          <div className='text intro-text intro-line'>a man of</div>
          <div className={`text intro-text intro-word ${fade ? 'fade-in' : 'fade-out'}`}>
            {words[index]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;