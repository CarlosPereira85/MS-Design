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
        style={{position: "absolute", left: "50px", top: "280px" ,width:"500px"}}
            
            onDrag={handleEvent}
            onStart={handleEvent}
            onStop={handleEvent}
            onMouseDown={handleEvent}
            onMouseUp={handleEvent}
            onTouchStart={handleEvent}
            onTouchEnd={handleEvent}>
            <div className="drag-box">
            <img className="imgc" src={displayItem} alt="" style={{ width: `${size}%`, height: `${size}%` }}  />
            </div>
          </Draggable>
   
      
       
       
    )}
export default Drag;