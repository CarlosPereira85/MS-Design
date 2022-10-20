
// import MyContext from "../context/MyContext";
// import { useContext } from "react";

// const Screenshot = () => {

//     const {setImgDesign,setLoading,setError, img} = useContext(MyContext);

//     const API_KEY = process.env.REACT_APP_API_KEY;
//     const URL = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=https://www.google.com/&fresh="true"`;


//     const getScreenshot = async () => {
//         setError(false);
//         setLoading(true);
//         const response = await fetch(URL);
//         if (response.ok) {
//             setImgDesign(response);
//             setLoading(false);
//         } else { setError(true); }}
    
//         const handleScreenshot = (e) => {
//             getScreenshot();
        
        
//         }
            

//   return (
//       <>
//     <div>
//         <button onClick={handleScreenshot}  type="submit">take a screnshoot</button>
//     </div>

   
         
//         <div>
//             <img src={img.url} alt="img"/> 
             
        
//         </div>
//         </>
        
//   )
// }
// export default Screenshot