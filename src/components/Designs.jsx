
import designs from "../data/designs";
import { useContext } from "react";
import  MyContext  from "../context/MyContext";
import { Draggable } from "drag-react";
import Drag from "./Drag";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import Slide from 'react-slideshow-image';

const Designs = () => {
 
  const {setDisplayItem, displayItem, size, setSize} = useContext(MyContext);

  const designLists =  designs.map((design) => (<img
    key={design.id}
          className="static"
          onClick={() =>setDisplayItem(design.image)}
          name={design.name}
          src={design.image}
          alt=""
          style={{ width: "100px", height: "100px" ,cursor: "pointer" , margin:"1px"}}

        />))
       



  return (
    <>
    <div className="slider-container">
     <input
     className="slider"
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
   </div>
   
      <div className="design-container" >


        {designLists}
       
       
        </div>
        
     
   
      <Drag/>
    </> 
  
  )}
  
export default Designs;
