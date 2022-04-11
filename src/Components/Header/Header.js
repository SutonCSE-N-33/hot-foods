import React, { useContext, useEffect, useState } from 'react';
import img from '../../imgs/logo2.png';
import {useNavigate} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';
import { getStoredCart } from '../../Utilities/fakedb';
import FakeData from '../../FakeData';
import { foodContext } from '../../App';

const Header = () => {

  const [cart,setCart] = useState([]);
  const [loggedInUser,setLoggedInUser] = useContext(foodContext);
  const history = useNavigate()
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

  const handleSignOut = () =>{
    setLoggedInUser({});
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
        <div  className='navbar'>
        
     
    <NavbarBrand to="/" className='header'>
      <img src={img} alt="" />
    </NavbarBrand>
   
   
      <Nav
        className="nav"
      >
       
        <NavLink>
             <ShoppingCartIcon></ShoppingCartIcon><sup style={{color:"crimson",fontSize:"15px",fontWeight:"700"}}>${sureGrandTotal}</sup>
        </NavLink>
       

       
        <NavLink className="login" onClick={()=>history("/login")} style={{cursor:"pointer",fontWeight:"600",fontSize:"18px"}}>
             Login
        </NavLink>
       

       
        <NavLink>
             <button onClick={handleSignOut} className='between-btn signOut'>SignOut</button>
        </NavLink>
        
      </Nav>
      
 
        </div>
    );
};

export default Header;