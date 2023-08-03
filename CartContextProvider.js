import React,{useReducer,useState} from 'react';
import CartContext from './CartContext';
import axios from 'axios';

const defaultCartState = {

    items :[], 
 
    totalAmount : 0,
    email:localStorage.getItem("getEndpoint")

};

const cartItemReducer = (state,action) =>{
    console.log("reducer",action.type);

    if(action.type === 'INITIALCART'){

        let totalAmount = 0;
        
        // console.log(action.data);
        totalAmount = action.data.reduce((acc,item) => acc+item.price*item.Quantity,0);
    
        console.log('totalamount',totalAmount);
        return {
            items: action.data,
            totalAmount : totalAmount,
            email:localStorage.getItem("getEndpoint")

        }
     
    }
    
    if(action.type ==='ADD'){
        const exixtingIndex = state.items.findIndex(
            (item) => item.id===action.item.id

        );
        
        const existingProduct  = state.items[exixtingIndex];
        
       let updatedItems;

        if(existingProduct){
            const updatedItem = {
                ...existingProduct,
                Quantity : existingProduct.Quantity + action.item.Quantity,
            };//update item end here
            
            updatedItems = [...state.items];
            updatedItems[exixtingIndex]=updatedItem;
            // console.log(updatedItems);
            
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
       


        const updatedAmount= state.totalAmount+action.item.price*action.item.Quantity

        console.log(state.items);
        localStorage.setItem('cart',JSON.stringify(updatedItems));
        
        
        return{
            items : updatedItems,
            totalAmount : updatedAmount,
            email:localStorage.getItem("getEndpoint")


    };
   
    }
    if(action.type==="EMPTY"){
        console.log("empty kardia")
        return{
            items:[],
            totalAmount:0,
            email:localStorage.getItem("getEndpoint")
        }
    }
    if (action.type === "REM") {
        let updatedItems;
        let updatedTotalAmount;
        let amount;
        //for checking existing item
        const exisitingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
      
        const exisistingItem = state.items[exisitingCartItemIndex];
        
        amount = exisistingItem.price * exisistingItem.Quantity; //it will grape total amount of particular item
        updatedTotalAmount = state.totalAmount - amount;
        updatedItems = state.items.filter((item) => item.id !== action.id);
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          email:localStorage.getItem("getEndpoint")
        };
      }
      if(action.type="endPoint"){
        return{
            items: state.items,
          totalAmount: state.totalAmount,
          email:localStorage.getItem("getEndpoint")
        }
      }
      

    
return defaultCartState;
}
const CartContextProvider = (props) => {


   const [token,setToken] = useState();
   const [endPoint,setEndPoint] = useState();

   const userIsLoggedIn = !!token;

    const [cartItemState,dispatchCartItemaction] = useReducer(cartItemReducer,defaultCartState);

    const addCartHandeler = (item) =>{
        
        dispatchCartItemaction({type : 'ADD', item : item })
        

    };

    const removeCartHandeler = async(_id,id) =>{
        console.log(id);
     
        try{
            const response = await axios.delete(`https://ecoumers-default-rtdb.firebaseio.com/cart/${_id}.json`)
            console.log(response);
        }
     
        catch(e){
            
        }
        dispatchCartItemaction({type : 'REM', id : id})
       

    };
    const initialCartHandeler = async() =>{



       const email = localStorage.getItem('endpoint');



    try{

        const response = await axios.get(`https://ecoumers-default-rtdb.firebaseio.com/cart/${email}.json`);
      
        console.log('response',response.data);
        const data  = response.data;

        if(data){

            dispatchCartItemaction({type : 'INITIALCART' , data:data})
            console.log('nitya',data);
        }
       
       
    }
    catch(e){

    }

   
    }
    const  endPointHandeler = () =>{
        dispatchCartItemaction({type : 'endPoint' , })
    }

    const loginHandeler = (email,idToken,displayName,aakash) =>{

        localStorage.setItem('email',email);
        localStorage.setItem('email',idToken);
        localStorage.setItem('email',displayName);
        localStorage.setItem('email',aakash);

        console.log({email,idToken,displayName,aakash},'heyy');

        setToken(idToken);
        setEndPoint(aakash);    
    }
   const logoutHandelere = () =>{

    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('displayName');
    localStorage.removeItem('endpoint');

   setToken(null);
   clearCartHandeler()
   

   }

   const clearCartHandeler = () =>{
console.log("cleacatHandler");
    dispatchCartItemaction({type:"EMPTY"})

   }


    const cartItemContext = {
        items : cartItemState.items,
        totalAmount : cartItemState.totalAmount,
        email : cartItemState.email,
        isLoggedIn : userIsLoggedIn,
        addItem : addCartHandeler,
        removeItem : removeCartHandeler,
        initialCart : initialCartHandeler,
        getEndpoint: endPointHandeler,
        login : loginHandeler,
        clearCart : clearCartHandeler,
        logOut : logoutHandelere
       
    }
    console.log('cartitem',cartItemContext.items);
   
  return (
    <CartContext.Provider value={cartItemContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;