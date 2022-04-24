
import designs from "../data/designs";
import { useContext } from "react";
import  MyContext  from "../context/MyContext";


const Designs = () => {
 
  const {setDisplayItem, displayItem} = useContext(MyContext);

  const designLists = designs.map((design) => (<img
    key={design.id}
          className="static"
          onClick={() =>setDisplayItem(design.image)}
          name={design.name}
          src={design.image}
          alt=""
          style={{ width: "100px", height: "100px" }}

        />))
       



  return (
    <>
      
   
      <div className="design-container">


        {designLists}
       
       
        </div>
     
       <div className="container">
         
          <img className="imgc" src={displayItem} alt="" style={{ width: "250px", height: "300px" }}  />
       
      </div>
      
    </> 
  
  )}
  
export default Designs;
