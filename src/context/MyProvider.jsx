import MyContext from "./MyContext";
import data from "../data/data";
import dataTshirts from "../data/dataTshirts";
import designs from "../data/designs";
import tshirtcolors from "../data/tshirtcolors";
import img from "../data/img/img21.png";
import { useState } from "react";



const MyProvider = ({ children }) => {


  const [size, setSize] = useState({});
  const [color, setcolor] = useState({id:1, url: "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/grey.png", name:"grey"});
  const [picture] = useState(data);
  const [image, takeScreenshot] = useState()
  const [cart, setCart] = useState([]);
  const { products } = dataTshirts;
  // const [cartItems, setCartItems] = useState([]);
  const [displayItem, setDisplayItem] = useState(img);
  // const [imgDesign, setImgDesign] = useState();
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);


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
        image,
        takeScreenshot,
        dataTshirts,
        color,
        handleTshirtColor,
        setCart,
        cart,
        picture,
       size,
        setSize,
       tshirtcolors,
        handleAddProduct,
        handleRemoveProduct,
        handleCartClear,
        designs,
        setDisplayItem,
        displayItem,
        // setImgDesign,setLoading,setError,img
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
