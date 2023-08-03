import React,{useRef,useState,useContext} from 'react';

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CartContext from '../../context/CartContext';
import { Button } from 'react-bootstrap';
import './Login.css';
import { useNavigate } from 'react-router-dom';



const Login = () => {

 const ctx = useContext(CartContext);

  const navigate = useNavigate();

    const [isLoading ,setIsLoading] = useState(false);
    const emailRef = useRef();
    const passwardRef = useRef();
  
   
  
    const loginHandeler = async () =>{
      setIsLoading(true);  
      const email = emailRef.current.value;
      const password = passwardRef.current.value;

      emailRef.current.value= '';
      passwardRef.current.value = '';

      if(password.length <=6){
        toast.error('passward is too short !!')
        setIsLoading(false);
        return;
   
       }
    
      try{
        const User = {
            email,
            password,
            returnSecureToken : true,
    
          }

      
     
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDh030Feq2Oxk5y173-LarG2eA00UzU7Ng',User);

      console.log(response);  
      

      localStorage.setItem('email',response.data.email);
      localStorage.setItem('token',response.data.idToken);
      localStorage.setItem('displayName',response.data.displayName);

       let aakash = localStorage.getItem('email').replace(/\.|@/g,'');
      localStorage.setItem('endpoint',aakash);
     

       ctx.login(response.data.email,response.data.idToken,response.data.displayName,aakash);

      toast.success('login sucessfull');
      navigate('/store');
      setIsLoading(false);
     
      

        }
        
        catch(e){
        
            toast.error(e.response.data.error.message);
            setIsLoading(false);
            navigate('/signup');
            alert(e.response.data.error.message);
         
            
          }
          
          ctx.getEndpoint();
    }
   
 
    return(
        <div className="form">
         <ToastContainer/>
            <div className='login-form'>
                <div className="username">
                    <label className="form__label">Email : </label>
                    <input className="form__input" type="email" id="email" placeholder="email" ref={emailRef}/>
                </div>
                <div className="lastname">
                    <label className="form__label">Passward : </label>
                    <input  type="password" name="" id="password"  className="form__input"placeholder="passwaod" ref={passwardRef}/>
                </div>
               
              {!isLoading && <Button variant="success" onClick = {loginHandeler} type="submit" className="btn">Login</Button>}
                </div>
              </div>
              
  )
}

export default Login