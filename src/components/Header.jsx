import Navbar from "./Navbar"
import img from "../data/img/MS background.png";
import { Link } from "react-router-dom";
const Header = () => {
    
  return (
<>
    <div className="header">
   <Link to='/'>
  <img src={img} alt="" style={{ widht: "150px", height: "150px" }} />
  </Link>
  <Navbar/>
    </div>
    
     </>
  )
}
export default Header