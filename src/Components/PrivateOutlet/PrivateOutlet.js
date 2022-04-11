import { useContext } from "react"

import {Navigate,Outlet} from 'react-router-dom';
import { foodContext } from "../../App";

export const PrivateOutlet = () =>{
    const [loggedInUser,setLoggedInUser] = useContext(foodContext);

  
  return loggedInUser.email?<Outlet/>:<Navigate to="/login"/>
}