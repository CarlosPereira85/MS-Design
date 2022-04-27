import MyContext from "../context/MyContext";
import { useContext, useEffect,useState } from "react";
import './Cart.css'


const Cart = () => {
  const {cart,  handleAddProduct, handleRemoveProduct, handleCartClear} = useContext(MyContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((price, item) => price + item.price * item.quantity, 0);
   setTotal(totalPrice);
    
  }, [cart]);
  
  return (
    
    <div className="cart-item">
      <h2> Cart Items </h2>
      <div>{cart.length>=1 &&
      (<button onClick={handleCartClear}> Clear Cart</button>)}
        </div>

    {cart.length === 0 && (<div>No items are added </div>
    ) }

<div className="cart-item2" >
    {cart.map((item) => (
      
      <div  className="cartorg" key={item.id}>
        <div className="cart-display">
        <img  className="imgsize"  src={item.url} alt={item.name} />
        {item.design && (<img className="imgsize2" width="20" height="20" src={item.design} alt={item.name} />)}
        </div>
        <div className="cartinfo">
      <div>
        {item.name}
      </div>
      <div className="buttonstyle">
       
        <button style={{ color: "red"}} onClick={()=>handleRemoveProduct(item)}>-</button>
        <button style={{ color: "green", textAlign:"center"}} onClick={()=>handleAddProduct(item)}>+</button>
      </div>
      <div>{item.quantity} * €{item.price}</div>
    </div>
    </div>
  ))}
  </div>
  
  <div>
    Total Price
  </div>
  €{total}
  </div>

  )}
export default Cart