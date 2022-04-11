import React, { useState } from 'react';
import AboutFakeData from '../../AboutFakeData';
import AboutCart from '../AboutCart/AboutCart';
import './AboutUs.css';

const AboutUs = () => {
    const [aboutUs,setAboutUs] = useState(AboutFakeData);
    return (
        <div className='about-us'>
            <div className="about-details">
                 <h4>Why You Choose Us</h4>
                 <p>Button Walted twenty always repair within we do.an delighted offendig <br />
                 curiosity my is dashwoods at.Boy prosperous increasing surrounded.
                 </p>
            </div>
            <div className="about-carts">
                  {
                      aboutUs.map(about => <AboutCart about={about}></AboutCart>)
                  }
            </div>
        </div>
    );
};

export default AboutUs;