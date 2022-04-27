
import designs from "../data/designs";
import { useContext } from "react";
import  MyContext  from "../context/MyContext";
import { Draggable } from "drag-react";
import Drag from "./Drag";



const Designs = () => {
 
  const {setDisplayItem, displayItem, size, setSize} = useContext(MyContext);

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
  
   
      <div className="design-container" >


        {designLists}
       
       
        </div>
     
      <input
      
          id="ranger"
          type="range"
          min="10"
          max="100"
          value={size}
          onChange={e => {
            const { value } = e.target;
            setSize(parseInt(value, 10));
            console.log(e.target.value);
          }}
          
        />
      <Drag/>
    </> 
  
  )}
  
export default Designs;
