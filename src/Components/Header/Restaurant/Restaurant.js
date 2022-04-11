import React, { useContext, useEffect, useState } from 'react';
import './Restaurant.css';
import {Link} from 'react-router-dom';
import {Container,Button} from 'reactstrap';
import FakeData from '../../../FakeData';
import Foods from '../Foods/Foods';
import AboutUs from '../../AboutUs/AboutUs';
import Footer from '../../Footer/Footer';
import BackgroundBanner from '../BackgroundBanner/BackgroundBanner';
import { getStoredCart } from '../../../Utilities/fakedb';
import { foodContext } from '../../../App';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import classes from './Classes.css';

const Restaurant = () => {
    const [foods,setFoods] = useState(FakeData);
    const [category,setCategory] = useState('lunch');
    const [activeClass,setActiveClass] = useState('lunch');
    console.log(activeClass);
    const [cart,setCart] = useState([]);
    const history = useNavigate();
   

    useEffect(()=>{
      const dbFoods = getStoredCart();
       const keys = Object.keys(dbFoods);
       const storageFoods = keys.map(key =>{
           const sameFood = FakeData.find(data => data.key === key);
           const count = dbFoods[key];
           sameFood.quantity = count;
           return sameFood;
       })
       setCart(storageFoods);
      
    },[])

    let disable;
    
       if(cart.length === undefined || cart.length<=0){
         disable = true;
       }else{
         disable=false;
       }
       console.log(disable)


    const selectFoods = foods.filter(food => food.category.toLowerCase() === category); 
    

    const handleFood = receiveCategory =>{
                const newCategory = receiveCategory;
                  setCategory(newCategory);
                  setActiveClass(newCategory);
    }




  
    return (
      <div>
      <Header></Header>
      <BackgroundBanner></BackgroundBanner>
      <div className='restaurant'>
         <div className="link-here">
          
         <div>
         <Link to="" onClick={()=>handleFood('breakfast')}>Breakfast</Link>
         {
           activeClass === 'breakfast' ?<hr className="activeClass" />:""
         }
         </div>
          <div>
          <Link to="" onClick={()=>handleFood('lunch')}>Lunch</Link>
          {
            activeClass === 'lunch' ?<hr className="activeClass" />:""
          }
          </div>
          <div>
          <Link to="" onClick={()=>handleFood('dinner')}>Dinner</Link>
          {
            activeClass === 'dinner' ?<hr className="activeClass" />:""
          }
          </div>
      </div>
     <Container>
     <div className="foods">
     {
        selectFoods.map(food => <Foods food={food}></Foods>)
    }
     </div>
     <button disabled={disable} onClick={()=>history('/checkOut')}
     className='checkout-food-btn'
   >
     Checkout Your Food
   </button>

   <AboutUs></AboutUs>
     </Container>

     <Footer></Footer>
      
</div>
      </div>
    );
};

export default Restaurant;