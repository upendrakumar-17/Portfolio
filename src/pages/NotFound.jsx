import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import Section from '../layout/Section';

const NotFound = () => {
  return (
    <Section variant="full">
      <div className='not-found-container'>
        <div className="not-found-content">

          <h1 className='not-found-code'>404</h1>
          <div className="not-found-divider" />
          <Link to="/" className="not-found-home-btn">
            Go Back Home
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default NotFound
