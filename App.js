import { Routes, Route} from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Store from "./components/Pages/Store";
import Layout from "./components/Layout/Layout";
import ContactUs from "./components/Pages/ContactUs";
import ProductsDetails from "./components/Product/ProductDetails"
import Signup from "./components/Pages/Signup";
import PrivateRoute from "./uitls/PrivateRoute/PrivateRoute";
import { useEffect,useContext } from "react";
import CartContext from "./context/CartContext";
import Login from "./components/Pages/Login";
import axios from 'axios';


function App() {

  const ctx = useContext(CartContext);
 console.log(ctx.isLoggedIn,'keshu');
  const cartItem =  ctx.items;
  useEffect(() =>{

 
    ctx.initialCart();
   

  },[ctx.isLoggedIn]);



  useEffect(() =>{


    addItem();
   

  },[cartItem]);

 async function addItem(){

    
   const email = localStorage.getItem('endpoint');
   console.log(email);
 
   const response =  await axios.put(`https://ecoumers-default-rtdb.firebaseio.com/cart/${email}.json`,cartItem);

   console.log(response);

  }

  return (
    <>
      <Layout>
       <Routes>
          <Route path= '/' element = {<Home/>}/>
          
          <Route path = '/store' exact element = {<PrivateRoute><Store/></PrivateRoute>}>
          </Route>
          <Route path = '/about' element={<About/>}/>
          <Route path = '/signup' element={<Signup/>}/>
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/contactUs' element={<ContactUs/>}/>
          <Route path = '/productDetails/:productId' element={<ProductsDetails/>}/>  
          </Routes>
       </Layout>
     </>
  );}

  export default App;
