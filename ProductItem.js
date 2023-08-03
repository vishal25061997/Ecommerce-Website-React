import React,{useContext} from 'react'
import { Card,Button} from 'react-bootstrap';
import CartContext from '../../context/CartContext';
import {useNavigate } from "react-router-dom";



export default function ProductItem(props) {

const navigate = useNavigate();

  const ctx = useContext(CartContext);

  const addCartToHandeler = async() =>{
 
    const email = localStorage.getItem('endpoint');
    console.log(email);
  
  
   ctx.addItem({...props,Quantity : 1});
    
   
  };
  const detailHandeler = () =>{
    console.log('nit',props.id);
    navigate(`/productDetails/${props.id}`);
    
      

  };
  return (
   
    <Card>

      <Card.Img variant="top" src= {props.imageUrl} onClick = {detailHandeler}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>
            <span>${props.price}</span>
          </Card.Subtitle>
              <Button variant="primary" onClick={addCartToHandeler}>Add to Cart</Button>
      </Card.Body>
    </Card>

  
  );
 
}