import React from 'react';
import './Quote.css';
import Thread from '../components/Thread';

const Quote = () => {
  return (
    <div className='subsection'>
      <div className='subsection-background'>
        <Thread/>
      </div>
      <div className='subsection-foreground'>
        <div className='quote-container'>
          <div>a</div>
          <div>b</div>
        </div>
      </div>
    </div>
  )
}

export default Quote