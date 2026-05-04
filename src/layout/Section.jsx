import React from 'react';
import './Section.css';

const Section = ({ 
  children, 
  background, 
  variant = 'full', // 'full' or 'partial'
  className = '' 
}) => {
  return (
    <section className={`section section--${variant} ${className}`}>
      <div className='section__background'>
        {background}
      </div>
      <div className='section__foreground'>
        {children}
      </div>
    </section>
  );
};

export default Section;