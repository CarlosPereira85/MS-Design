import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header'
import Home from '../components/Home'
import Tshirts from '../components/Tsettings'
import About from '../components/About'
import Designs from '../components/Designs'
import Footer from '../components/Footer'
import Products from "../components/Products";
import Login from "../components/Login";
import Cart from '../components/Cart'



const Routings = () => (

   <Router>

<Header/>
       <Routes>
      
         <Route path="/" element={<Home/>} />
         <Route path="/tshirts" element={<Tshirts/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/designs' element={<Designs/>} />
         <Route path='/products' element={<Products/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/cart' element={<Cart/>} />
     
       </Routes>

<Footer/>

   </Router>
    )

export default Routings