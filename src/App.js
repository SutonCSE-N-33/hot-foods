import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route, Navigate, BrowserRouter as Router} from "react-router-dom";
import Restaurant from './Components/Header/Restaurant/Restaurant';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import CheckOut from './Components/CheckOut/CheckOut';
import { PrivateOutlet } from './Components/PrivateOutlet/PrivateOutlet';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Cart from './Components/Cart/Cart';



export const foodContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
 
  
  return (
    <foodContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
    
     <Routes>
          <Route path="/" element={<Navigate to="restaurant" /> } />
           <Route path="restaurant" element={<Restaurant></Restaurant>} />
           <Route path="/food-details/:foodId" element={<FoodDetails></FoodDetails>}/>

           <Route path="/*" element={<PrivateOutlet/>}>
              <Route path="checkOut" element={<CheckOut></CheckOut>}/>
           </Route>
           <Route path="/placeOrder" element={<PlaceOrder/>}></Route>
           <Route path="/login" element={<Login></Login>}/>
           <Route path="*" element={<NotFound />}/>
          
           
     </Routes>
     </Router>
    </foodContext.Provider>
  );
}

export default App;
