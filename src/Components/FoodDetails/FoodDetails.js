import React, { useState, useEffect } from 'react';
import './FoodDetails.css';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import FakeData from '../../FakeData';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { addToDb, getStoredCart } from '../../Utilities/fakedb';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';


const FoodDetails = props => {
    const {foodId} = useParams();
    const correctFoodId =Number(foodId);
    const [foods,setFoods] = useState(FakeData);
    const findFood = foods.find(food => food.id === correctFoodId);
    const {foodName,img,price,details,key} = findFood;
    

    const [cartFood,setCartFood] = useState([]);
    const [cart,setCart] = useState([]);
     
    const foodQuantity = cartFood.find((food)=>food.key === key);
    let thisQuantity=0;
    if(foodQuantity){
        thisQuantity = foodQuantity.quantity;
    }
    


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
        
      },[])



     
    let count = thisQuantity;
    const handleQuantity = (num,foodKey) => {
       
        let newFood;
        const sameFood = cartFood.find((food)=>food.key === foodKey);
        if(sameFood){
            count = sameFood.quantity + (num);
            if(count >= 0){
                sameFood.quantity = count;
            const otherFood = cartFood.filter(food =>food.key !== foodKey)
            newFood = [...otherFood,sameFood];
            }
        }else{
            findFood.quantity = 1;
            newFood = [...cartFood,findFood];
        }     
          setCartFood(newFood);
       
    }

    

    const handleAddFood = (key) => {
        let addNewFood;
        const addSameFood = cart.find(food => food.key === key);
        if(addSameFood){
            const addOtherFood = cart.filter(food => food.key !== key);
             addNewFood = [...addOtherFood,addSameFood];
        }else{
            const addFindFood = cartFood.find(food=> food.key === key);
            addNewFood = [...cart,addFindFood];
        }  
         setCart(addNewFood);
        addToDb(key,thisQuantity);
    }
    
    
    const totalPrice = cart.reduce((total,food)=>total+food.price*food.quantity,0)
    const tax = totalPrice/10;
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
    

    return (
        <div>
        <Header></Header>
            <div className="container">
                 <div className="row">
                      <div className="col-md-6">
                            <div className="details">
                                <h4>{foodName}</h4>
                                <small>{details}</small>
                                <div className="price-quantity">
                                <p>${price}</p>
                                    <div className="quantity">
                                    <span className='sub' onClick={()=>handleQuantity(-1,key)}>-</span> {thisQuantity} <span className='sum' onClick={()=>handleQuantity(+1,key)}>+</span>
                                    </div>
                                </div>
                                <div className="add-btn">
                                <button className='between-btn' onClick={()=>handleAddFood(key)} ><ShoppingCartIcon /><sup>${sureGrandTotal}</sup> Add</button>
                                    <Link to="/">
                                    <button className="between-btn back-btn">Back <ArrowRightAltIcon /> </button>
                                    </Link>
                                </div>
                                <div className="child-item">
                                    <img src={img} className="item-1" width="100px" alt="" />
                                    <img src={img} className="item-2" width="100px" alt="" />
                                    <ArrowForwardIosIcon className="arrow-icon" />
                                </div>
                            </div>
                      </div>
                      <div className="col-md-6">
                                <div className="big-img">
                                    <img src={img} alt="" />
                                </div>
                      </div>
                 </div>
               
            </div>
        </div>
    );
};

export default FoodDetails;