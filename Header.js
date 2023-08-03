import React from 'react';
import Cart from '../Cart/Cart';

import CartContext from '../../context/CartContext';

import {Navbar,Container,Badge,Nav,Dropdown, Button} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';


const  Header = ()  => {
  const ctx =  useContext(CartContext);
  // const [isLogin,setIsLogin] = useState(true)

  const navigate = useNavigate()
  const logoutHandelere = () =>{

    ctx.logOut();
   
   

    navigate('/');
  }
  const auth = localStorage.getItem('token');
  const displayName = localStorage.getItem('displayName');
 const numberOfCartItem = ctx.items.reduce((currNo,item) => {
  return(
    currNo+item.Quantity
  );
 },0);
  return (
    <>
       <Navbar bg="dark" variant = "dark" style = {{height :80,display : 'flex' , justifyContent : 'center'}}>
        <Container>
          <Navbar.Brand className = "m-auto">
            <Link to='/'>Home</Link>
            </Navbar.Brand>
            <Navbar.Brand className = "m-auto">
            <Link to='/about'>About</Link>
            </Navbar.Brand>
       { !auth && (<Navbar.Brand className = "m-auto">
            <Link to='/signup'>Signup</Link>
            </Navbar.Brand>)}
         { !auth && (<Navbar.Brand className = "m-auto">
            <Link to='/login'>Login</Link>
            </Navbar.Brand>)}

            <div>
       {auth && <Button variant = 'success' onClick={logoutHandelere} className="logout">Logout</Button>}
      </div>
           
            <Navbar.Brand className = "m-auto">
            <Link to='/contactUs'>ContactUs</Link>
            </Navbar.Brand>
            <Navbar.Brand className = "m-auto">
            <Link to='/store'>Store</Link>
            </Navbar.Brand>
           <div>{displayName}</div>
           
       

          <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{numberOfCartItem }</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <Cart/>
            </Dropdown.Menu>
            </Dropdown>
            </Nav>
        </Container>
      </Navbar>
      </>
      );
}
export default Header;