import { useContext } from "react"
import MyContext from "../context/MyContext"


const Tdisplay = () => {
    const { color } = useContext(MyContext)
   console.log(color);
  return (
    <div className="tsingle">
       
        <img src={color.url} alt="img-tshirt" />
       <div>
       
        <button>See More Designs</button>
        
        </div>
    </div>
  )
}
export default Tdisplay