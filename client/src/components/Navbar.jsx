import { NavLink } from "react-router-dom";
import MyContext from "../context/MyContext";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(MyContext);
  return (
    <>
     
      <nav className="navbar">
        <ul>
          <NavLink to='/' style={({isActive}) => {
            return {color: isActive && 'white'}
          }}>
            <li>Home</li>
          </NavLink>
          <NavLink to='/about' style={({isActive}) => {
            return {color: isActive && 'white'}
          }}>
            <li>About</li>
          </NavLink>
          {/* <NavLink to='/designs' style={({isActive}) => {
            return {color: isActive && 'green'}
          }}>
            <li>Designs</li>
          </NavLink> */}
          <NavLink to='/tshirts' style={({isActive}) => {
            return {color: isActive && 'white'}
          }}>
            <li>T-shirts</li>
          </NavLink>

         
          
          <NavLink to='/products'className='productsnav' style={({isActive}) => {
            return {color: isActive && 'white'}
          }}>
            <li>Products</li>
            
          </NavLink>
         <div className="cart_login">
         <NavLink to='/cart'className='cart_nav' style={({isActive}) => {
            return {color: isActive && 'white'}
          }}>
           
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{cart.length ===0 ? "" : cart.lenght}</span>
          </NavLink>
          <NavLink to='/login' style={({isActive}) => {
            return {color: isActive && 'white'}
          }}>
            <li>Login</li>
            
          </NavLink>
         </div>
         
        
        </ul>
      </nav>
    </>
  );
};
export default Navbar;