import React,{useRef} from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './ContactUs.css';
const ContactUs = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneNoRef = useRef();

    const handleSubmit = async() =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phoneNo= phoneNoRef.current.value;

        const User = {
            name,
            email ,
            phoneNo,
            returnSecureToken : true,
        }
        console.log("nitya",User);
        const response =  await axios.post('https://ecoumers-default-rtdb.firebaseio.com/ContactUs.json ',User);
     
        console.log("aaksgh",response);
       
    }
    



  return (
    <div className="contact-form">
 
    <div className="contactus-form">
        <div className="username">
            <label className="form__label" >Name : </label>
            <input className="form__input" type="text" id="firstName" placeholder="First Name" ref={nameRef}/>
        </div>
        <div className="email">
            <label className="form__label">Email id : </label>
            <input  type="email" id="email" className="form__input" placeholder="Email"  ref = {emailRef}/>
        </div>
        <div className="password">
            <label className="form__label" >PhoneNo.: </label>
            <input className="form__input" type="number"  id="phoneno" placeholder="Phoneno"  ref={phoneNoRef}/>
        </div>
    </div>
    <div>
        <Button variant="success" onClick = {handleSubmit} type="submit" className="btn">Submit</Button>
    </div>
    </div>
  )
}

export default ContactUs;