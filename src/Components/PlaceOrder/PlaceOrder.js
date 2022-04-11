import React, { useContext,useState } from 'react';
import './PlaceOrder.css';
import img1 from '../../imgs/Screenshot_1.png';
import img2 from '../../imgs/Screenshot_7.png';
import img3 from '../../imgs/Group 1151.png';
import img4 from '../../imgs/Group 1152.png';
import img5 from '../../imgs/giphy.gif'; 
import { foodContext } from '../../App';
import Header from '../Header/Header';
import firebaseConfig from '../../FirebaseAuthConfig';
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { clearTheCart } from '../../Utilities/fakedb';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const PlaceOrder = () => {
    const [loggedInUser,setLoggedInUser] = useContext(foodContext);
    const [doneCheckout,setDoneCheckout] = useState(false);

    
const user = auth.currentUser;
let name;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
      name = user.displayName;
  
}

const handleFinish = () =>{
  clearTheCart();
  setDoneCheckout(!doneCheckout);
}
    const done = <div>
    <div className="congrats">
    <img src={img5} style={{borderRadius:"50%"}} alt="" />
    <h1>Congratulations!</h1>
    </div>
    </div>;
    return (
        <div>
            <div className="container">
              {
                doneCheckout?done:<div className="row">
                <div className="col-md-8">
                   <div className='map'>
                   <img src={img1} alt="" />
                   </div>
                </div>

                <div className="col-md-4">
                         <div className="order-details">
                              <img className='bike-img' src={img3} width="70px" alt="" /><br />
                              <img src={img2} alt="" />
                              <h3>09:30</h3>
                              <small className='delivery-time'>Estimated Delivery Time</small>
                              <div className='raider-details'>
                                  <img src={img4} width="50px" height="50px"  alt="" />
                                  <div className='raider'>
                                     <h4>{name}</h4>
                                     <p>Your Raider</p>
                                  </div>
                              </div>
                              <span onClick={handleFinish} className='contact-btn'>Contact</span>
                         </div>
                </div>
              </div>
              }
            </div>
        </div>
    );
};

export default PlaceOrder;