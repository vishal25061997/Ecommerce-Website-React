import React from 'react';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import { Container,Row,Col,Table,Button } from 'react-bootstrap';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartItem = cartCtx.items.map((item) =>{
     return(
      <CartItem
      key = {item.id} 
      _id = {item._id}
      id = {item.id}
      title = {item.title}
      price = {item.price}
      image = {item.imageUrl}
      Quantity = {item.Quantity}
      />
     )
  })
  
  return (
    <Container style={{display :'block'}}>
      <Row>
        <Col className='cart-row'>
         Cart
        </Col>
      </Row>
      <Row>
        <Col> 
        <Table>
          <thead>
            <tr>
              <th>
                Item
              </th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItem}
          </tbody>
        </Table>
        </Col>
      </Row>
     
      <div>
      <strong className='amount'>Total Amount = {cartCtx.totalAmount}</strong>
    </div>
     <Button  className='cartStyle' variant='success'>Purches</Button>
  
     </Container>
    
  );
}

export default Cart;