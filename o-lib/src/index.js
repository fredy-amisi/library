import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Eservices from "./Pages/Eservices";
import Gallery from "./Pages/Gallery";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Team from "./Pages/Team";
import pServices from "./Pages/pservices";
import About from "./Pages/About";
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Booking from './Components/Booking';
import Admin from "./Pages/Admin";
import './index.css';
import Footer from './Components/Footer';
import ScrollAnimation from './Components/ScrollAnimation ';
import ScrollAnimation2 from './Components/ScrollAnimation2 ';
import UserEdit from "./Components/UserEdit "


export default function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/Index" element={<Index/>} />
      <Route path="/Eservices" element={<Eservices/>} />
      <Route path="/Team" element={<Team/>} />
      <Route path="/Gallery" element={<Gallery/>} />
      <Route path="/pServices" element={<pServices/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Booking" element={<Booking/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/ScrollAnimation" element={<ScrollAnimation/>} />
      <Route path="/ScrollAnimation2" element={<ScrollAnimation2/>} />
      <Route path="/user/:userId/edit" render={(props) => <UserEdit userId={props.match.params.userId} />} />







    

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
