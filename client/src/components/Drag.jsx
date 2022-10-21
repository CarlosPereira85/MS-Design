// import img from '../assets/camiseta1.png';
import { useContext } from 'react';
import MyContext from '../context/MyContext'
import { Draggable } from 'drag-react';
const Drag = () => {

    const { size,setSize, displayItem} = useContext(MyContext)
     const handleEvent = (e, data) => {
        console.log('Event Type', e.type);
        console.log(e, data);

      }
      

    return (
       
       
     
        <Draggable
        style={{position: "absolute", left: "90px", top: "330px" ,width:"630px", height:"580px" ,overflow: "hidden"
      ,cursor: "grabbing"
      }}
            
            onDrag={handleEvent}
            onStart={handleEvent}
            onStop={handleEvent}
            onMouseDown={handleEvent}
            onMouseUp={handleEvent}
            onTouchStart={handleEvent}
            onTouchEnd={handleEvent}>
            
            <img className="imgc" src={displayItem} alt="" style={{ width: `${size}%`, height: `${size}%`,  }}  />
           
          </Draggable>
   
      
       
       
    )}
export default Drag;