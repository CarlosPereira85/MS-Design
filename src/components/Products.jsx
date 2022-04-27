import MyContext from "../context/MyContext";
import { useContext } from "react";
import './Products.css'


const Products = () => {
    const {dataTshirts, handleAddProduct} = useContext(MyContext);


  return (
      
    <div className="products">
     

    {dataTshirts.map((dataTshirts) => (
        <>
        <div className="card">
            <img className="product-image" src={dataTshirts.url} alt={dataTshirts.name} />
       
        <div className="tname">
            <h3>{dataTshirts.name}</h3>
        </div>
    
        <div className="price">
            €{dataTshirts.price}
        </div>
        <div>
            <button className="addtocartbtn" onClick={() =>handleAddProduct(dataTshirts)}>Add To Cart</button>
        </div>
        </div>

        </>
    ))}
    </div>
 
   
  )
}
export default Products