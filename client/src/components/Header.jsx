import Navbar from "./Navbar"
import img from "../data/img/MS background.png";
import { Link } from "react-router-dom";
const Header = () => {
    
  return (
<>
    <div className="header">
   <Link to='/'>
  <img className="logo" src={img} alt=""  />
  </Link>
  <Navbar/>
    </div>
    
     </>
  )
}
export default Header