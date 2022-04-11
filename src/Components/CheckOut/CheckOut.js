import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import './CheckOut.css';
import {useForm} from 'react-hook-form';
import CheckOutItem from './CheckOutItem/CheckOutItem';
import { getStoredCart } from '../../Utilities/fakedb';
import {useNavigate} from 'react-router-dom';
import FakeData from '../../FakeData';
const CheckOut = () => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const [disable,setDisable] = useState(true);
    const [submit,setSubmit] = useState(false);
    const onSubmit =(data)=>{
        setDisable(false)
        setSubmit(!submit)
        console.log(data)
    };
     const history = useNavigate();

    const [cart,setCart] = useState([]);
    useEffect(()=>{
      const dbFoods = getStoredCart();
       const keys = Object.keys(dbFoods);
       const storageFoods = keys.map(key =>{
           const sameFood = FakeData.find(data => data.key === key);
           const count = dbFoods[key];
           sameFood.quantity = count;
           return sameFood;
       })
       setCart(storageFoods)
      
    },[]);


    const totalQuantity = cart.reduce((total,item)=>total+item.quantity,0)
  
    const totalPrice = cart.reduce((total,food)=>total+food.price*food.quantity,0)
    const tax = (totalPrice/10);
    const finalTax = tax.toFixed(2)
    let shippingCost = 0;
    if(totalPrice>50){
        shippingCost = 0;
    }else if(totalPrice>30){
        shippingCost = 10;
    }else if(totalPrice>0){
        shippingCost = 5;
    }
    const grandTotal = totalPrice + tax + shippingCost;
    const sureGrandTotal = grandTotal.toFixed(2);

    const placeOrder = () =>{
        history('/placeOrder');
    }
    return (
        <div>
           <Container>
             <div className="row">
                 <div className="col-md-6 col-sm-12">
                     
                       <div className="delivery-form">
                      {
                       submit&&<p style={{color:"green"}}>Submitted successfully then click Place Order Button</p>
                      }
                       <h4>Edit Delivery Details</h4>
                       <hr className='border'/>

                       <form onSubmit={handleSubmit(onSubmit)}>
                      
                       <input className="checkout-input-field" defaultValue="" placeholder='Delivery type' {...register("delivery type", { required: true })} /><br/>
                       
                       <input className="checkout-input-field" placeholder='Address' {...register("address", { required: true })} /><br/>
                       {errors.address && <span className="error"> This field is required <br /></span>}

                       <input className="checkout-input-field" placeholder='Flat or Floor' {...register("flatOrFloor", { required: true })} /><br/>
                       {errors.flatOrFloor && <span className="error"> This field is required <br /></span>}

                       <input className="checkout-input-field" placeholder='BusinessName' {...register("BusinessName", { required: true })} /><br/>
                       {errors.BusinessName && <span className="error"> This field is required <br /></span>}

                       <input className="checkout-input-field" placeholder='Add delivery Instructor' {...register("deliveryInstructor", { required: true })} /><br/>
                       {errors.deliveryInstructor && <span className="error"> This field is required <br /></span>}
                       
                       <input className="checkout-btn" type="submit" value="Save & Continue" />
                     </form>
                       </div>
                    
                 </div>
                 <div className="col-md-2">
                 <div>
                 </div>
                 </div>
                 <div className="col-md-4">
                 <div className='checkOutItem'>
                      <h5>From <span className='address'>Gulshan Plaza Restaura GPR</span></h5>
                      <h6>Arriving in 12-30 min</h6>
                      <h6>107 RD NO-8</h6>

                     <div className="overflow">
                     {
                        cart.map(food=> <CheckOutItem item={food}></CheckOutItem>)
                    }
                     </div>

                      <div className='all-details'>
                     <div className='item-details'>
                     <p>SubTotal:{totalQuantity}Item</p>
                     <p>{sureGrandTotal}</p>
                     </div>

                     <div className='item-details'>
                     <p>Tax</p>
                     <p>${finalTax}</p>
                     </div>

                     <div className='item-details'>
                     <p>Delivery Fee</p>
                     <p>${shippingCost}</p>
                     </div>

                     <div className='item-details'>
                     <p>Total</p>
                     <p>${sureGrandTotal}</p>
                     </div>

                     <button disabled={disable} onClick={placeOrder} className='place-btn'>Place Order</button>
            </div>
                 </div>
                 </div>
             </div>
           </Container>
        </div>
    );
};

export default CheckOut;