import React from 'react'

const CartContext =  React.createContext({
  items : [],
  email: '',
  quantity : 0,
  totalAmount : 0,
  isLoggedIn :false,
  addItem : (item,email) => {},
  removeItem : (id) =>{},
  getEndpoint : () =>{},
  initialCart : () =>{},
  login : () =>{},
  logOut : () =>{},
  clearCart: () =>{}

 
});
export default CartContext