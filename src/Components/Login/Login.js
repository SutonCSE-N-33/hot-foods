import './Login.css';
import React, { useContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../FirebaseAuthConfig';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { foodContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import img from '../../imgs/logo2.png';
import background from '../../imgs/bannerBackground.png';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
    const [newUser,setNewUser] = useState(false);
    const [loggedInUser,setLoggedInUser] = useContext(foodContext);
    const [unValid,setUnValid] = useState(false)
     const [users,setUsers] = useState({
         name:"",
         email:"",
         password:"",
         confirmPassword:"",
         success:false,
         error:""
     });
     const navigate = useNavigate();
     
    const validData = e =>{
            let isValid;
            if(e.target.name === 'email'){
                const regEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
                isValid = regEx.test(e.target.value);
            }if(e.target.name === 'password'){
                const minimumChar = e.target.value.length>6;
                const pattern = /^(?=.*[0-9])/;
                const validPassword = pattern.test(e.target.value);
                isValid = minimumChar && validPassword;
            }if(e.target.name === 'confirmPassword'){
                const confirmPassword = e.target.value;
                isValid = (users.password === confirmPassword);
            }
            if(e.target.name === 'name'){
                isValid =true;
            }
            if(isValid){
                const newUserInfo = {...users};
                newUserInfo[e.target.name] = e.target.value;
                setUsers(newUserInfo);
            }if(!isValid){
                setUnValid(!unValid);
            }     
    }

    const handleSignIn = (e) =>{
        e.preventDefault();
    if(newUser && users.email && users.confirmPassword){
       createUserWithEmailAndPassword(auth, users.email, users.password)
    .then((res) => {
    const newUserInfo = {...users};
    newUserInfo.success = true;
    newUserInfo.error = '';
    setUsers(newUserInfo);
    handleUpdateProfile(users.name);
    setNewUser(!newUser);
  })
  .catch((error) => {
    const newUserInfo = {...users};
    newUserInfo.success = false;
    newUserInfo.error = error.message;
    setUsers(newUserInfo);
  })
    }

    if(!newUser && users.email && users.password){
        signInWithEmailAndPassword(auth, users.email, users.password)
        .then((res) => {
            const newUserInfo = {...users};
            newUserInfo.success = true;
            newUserInfo.error = '';
            setUsers(newUserInfo);
            setLoggedInUser(newUserInfo);
            navigate('/checkOut')
        })
        .catch((error) => {
            const newUserInfo = {...users};
            newUserInfo.success = false;
            newUserInfo.error = error.message;
            setUsers(newUserInfo);
        });
    }
 
    }
    const handleUpdateProfile = (name)=>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            console.log("profile Updated")
          }).catch((error) => {
            console.log(error);
          });
    }
  
    return (
       <div>
       <div className="login-banner" style={{backgroundImage:`url(${background})`}}>
       <div className="form-logo">
               <img src={img} width="200px" alt="" />
       </div>
    <div className="form-area">
       {
        users.success&&<p>Account Created Successfully</p>
    }
        <form className="login-form" onClick={handleSignIn}>
           {newUser&&<input type="text" className="input-field" required onBlur={validData} name="name" placeholder="Enter Your Name" />}<br />
           <input type="email" className="input-field" required  onBlur={validData} name="email" placeholder="Email" /><br />
           <input type="password" className="input-field" required  onBlur={validData} name="password" placeholder="Password" /><br />
           {unValid&&<p>Minimum 6 characters width 2 digits</p>}
           {newUser&&<input type="password" className="input-field" onBlur={validData} required  name="confirmPassword" placeholder="Confirm Password" />}<br />
           <input type="submit" className="submit-btn" value={newUser?"SignUp":"Login"} />
        </form>
        {
            newUser?<p>You Have an account</p>:<p>Please <u onClick={()=>setNewUser(!newUser)}>SignUp</u></p>
        }

       </div>
    </div>
       </div>
    );
};

export default Login;