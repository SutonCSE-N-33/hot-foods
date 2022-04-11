import React from 'react';

import './CheckOutItem.css';
const CheckOutItem = props => {
    const food = props.item;
    const {quantity,img,foodName,price} = food;
    console.log(food);
    return (
        <div >
            <div className="item">
            <img src={img} alt="" />
            <div className='checkout-item'>
                   <p className='title'>{foodName}</p>
                   <p className='price'>{price}$</p>
                   <p className='delivery'>delivery free</p>
            </div>
            <div>
                 <span className='remove'>-</span><span className='checkout-quantity'>{quantity}</span><span className='add'>+</span>
            </div>
            </div>


            
        </div>
    );
};

export default CheckOutItem;