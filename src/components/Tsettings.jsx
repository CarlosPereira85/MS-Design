import Tdisplay from "./Tdisplay"
import MyContext from "../context/MyContext"
import { useContext } from "react"
import Designs from "./Designs";
import colors from "../data/tshirtcolors";








const Tsettings = () => {
  const { handleTshirtColor, setCart,cart,color, displayItem } = useContext(MyContext)
  const tshirtList = colors.map(color => <img onClick={() => handleTshirtColor(color)} src={color.url} alt="white-tshirt"  />)



  return (
    
    <div className="big-cont">
    <Tdisplay />
    <div className="media">
      
      <h3 className="text-center"> Settings</h3>
    <h4>Change T-shirt Color</h4>
    <div className="tshirt-color">
      {tshirtList}
  
    </div>
    <hr className="line" />
    {/* <div>{picture.map(function(d, idx){
         return (<li key={idx}>{d.descri}</li> )
       })} </div>
       <div>{picture.map((area) => {
        return <img key={area.id} src={area.image} alt='abstract' widht='100' height= "100" />;
      })}</div> */}
     
      <Designs/>
      <button onClick={()=>setCart([...cart,{id:color.id, name:color.name,url:color.url,design:displayItem,price:color.price,quantity:color.quantity }])}>Add to Cart</button>
      
    </div>
    </div>
    
  )
}
export default Tsettings