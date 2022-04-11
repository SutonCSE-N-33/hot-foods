import React from 'react';
import './AboutCart.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from '@mui/material';
const AboutCart = props => {
    const {title,details,img,icon} = props.about;
    return (
        <div className='simple-about-cart'>
            <img src={img} alt="" width="300px" />
            <div className='title-icon'>
             <span className="icon">{icon}</span>
              <div className="cart-text">
              <h4>{title}</h4>
              <small>{details}</small><br /><br />
              <Link to="">
                  <span>See more.....</span>
                  <ArrowRightAltIcon/>
              </Link>
              </div>
            </div>
            
        </div>
    );
};

export default AboutCart;