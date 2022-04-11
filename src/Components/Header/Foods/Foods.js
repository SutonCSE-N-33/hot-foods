import React from 'react';
import { Link } from 'react-router-dom';
import './Foods.css';


const Foods = props => {
    const {id,foodName,price,outLine,img} = props.food;
    
    return (
        <div className="food">
                 <Link to={`/food-details/${id}`}>
                 <img src={img} width="200px" height="200px" alt="" />
                 <h6>{foodName}</h6>
                 <p style={{color:"grey",fontSize:"15px"}}>{outLine}</p>
                 <p className='price'>${price}</p>
                 </Link>
                
        </div>
    );
};

export default Foods;