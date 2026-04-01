import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page background-image">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, where nature meets nurture. 
          Discover our extensive collection of beautiful plants, 
          from lush indoor greenery to vibrant outdoor blooms. 
          Transform your space into a green paradise with our carefully 
          selected plants and expert care guidance.
        </p>
        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;