import MyContext from "./MyContext";
import data from "../data/data";
import dataTshirts from "../data/dataTshirts";
import designs from "../data/designs";
import tshirtcolors from "../data/tshirtcolors";
import img from '../data/img/Abstrakt1.png'
import { useState } from "react";


const MyProvider = ({ children }) => {



  const [color, setcolor] = useState({id:1, url: "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/white.png", name:"white"});
  const [picture] = useState(data);
  
  const [cart, setCart] = useState([]);
  const { products } = dataTshirts;
  // const [cartItems, setCartItems] = useState([]);
  const [displayItem, setDisplayItem] = useState(img);
  
console.log(cart);
  // const handleImg2 = (e) => {
  //   setShow(false);
  // };

  const handleTshirtColor = (color) => {
    
    setcolor(color);
   
    
  };

  

  const handleAddProduct = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }}
    const handleRemoveProduct = (product) => {
      const ProductExist = cart.find((item) => item.id === product.id);
      if (product.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id))
    }
      else {
        setCart(
          cart.map((item) => item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity - 1} : item)
        )
      }
    }
      
      const handleCartClear = () => {
        setCart([]);}


  return (
    <MyContext.Provider
      value={{
        
        dataTshirts,
        color,
        handleTshirtColor,
        setCart,
        cart,
        picture,
       
       tshirtcolors,
        handleAddProduct,
        handleRemoveProduct,
        handleCartClear,
        designs,
        setDisplayItem,
        displayItem
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;