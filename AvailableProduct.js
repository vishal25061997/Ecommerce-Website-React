import React from 'react';
import ProductItem from './ProductItem';
import './AvailableProduct.css';

export const productsArr =
 
[

    {
    
    title: 'Colors',

    id : 'm1',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',

    id : 'm2',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    id : 'm3',

    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
   
    {
    
    title: 'Blue Color',

    id : 'm4',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
export default function AvailablePoduct() {

    const products = productsArr.map(items => { return <ProductItem id = {items.id} key = {items.id} title = {items.title} price = {items.price} imageUrl = {items.imageUrl}/>})
    
  return (
    <div>
      <h2 className='music'>MUSIC</h2>
   
     <div className='store'>
      
      <div className='container'>
      
        {products}
      </div>
     </div>
     </div>
  )
}