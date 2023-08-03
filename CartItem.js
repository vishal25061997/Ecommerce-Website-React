
import React,{useRef,useContext} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../../context/CartContext';
import './CartItem.css';

const CartItem = (props) => {
    let placeholder = 0;
    const Quantity = useRef('');

    const ctx = useContext(CartContext);
    placeholder = placeholder+props.Quantity;

    const removeHandeler = (_id,id) =>{
       ctx.removeItem(_id,id)
    }
  
  return (

 
    <tr>
        
        <td className='cartItem'>
        
            <img src={props.image} className='cartItemImg'/>
        </td>
        <td>{props.title}</td>
        <td>
            {props.price}
        </td>
        <td>
            
                <input type='text' min = {1} ref={Quantity} placeholder ={placeholder} size = '2'/>
                
        </td>
        <td style={{alignItems :'center'}}>
                    <Button className='remove-btn' onClick={() => removeHandeler(props._id,props.id)}>Remove</Button>
                </td>
    </tr>
  )
}

export default CartItem