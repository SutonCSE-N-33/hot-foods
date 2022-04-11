import React from 'react';
import background from '../../../imgs/bannerBackground.png';
import './BackgroundBanner.css';
const BackgroundBanner = () => {
    return (
        <div>
        <div className="navBanner" style={{backgroundImage:`url(${background})`}}>
              <h1>Best Food waiting for Yor belly</h1>
              <div className='search-items'>
              <button style={{marginLeft:"290px",zIndex:1}} className='between-btn search-btn'>Search</button>
              <input type="text" placeholder='Search Food Items' />
              </div>
        </div>
        </div>
    );
};

export default BackgroundBanner;
