import React from 'react';
import { Card,CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {productsArr} from './AvailableProduct';
import './ProductDetails.css';

const ProductsDetails = () => {
    const params = useParams();
    console.log(params.productId);
const id = params.productId;

    const data = productsArr.find((element) => element.id === id)
    console.log(productsArr);
    console.log(data);
  return (
    <div>
    <CardGroup>
    <span>
    <Card>
    <Card.Img variant="top" src= {data.imageUrl} className='details-img'/>
    <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Subtitle>
          <span>${data.price}</span>
        </Card.Subtitle>
    </Card.Body>
  </Card>
    </span>
   
    <span className='details-style'>
      <div>
      <h1>Reviews By Our Coustomer</h1>
      <h4>Nitya Patel</h4>
      <p>Good product go for it</p>
      </div>
      <div>
     
      <h4>Neha Patel</h4>
      <p>Quality is good worth it</p>
      </div>
    </span>
   
    </CardGroup>
   
  </div>
  );
}

export default ProductsDetails;