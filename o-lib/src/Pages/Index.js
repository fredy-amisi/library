import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/styling.css'
import { Button } from 'react-bootstrap';
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Scrollbutton from "../Components/Scrollbutton";
import Feature from "../Components/Feature";
import About from "../Pages/About";
import Services from "./services";
import Courses from "./Courses";
import Team from "./Team";
import { useNavigate } from "react-router-dom";


const Index =()=>{

  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); // Replace "/signup" with the actual path to your Signup page
  };

  const handleLoginClick = () => {
    navigate("/login"); // Replace "/login" with the actual path to your Login page
  };


   const slides= [
    {
        id:1,
        WelcomeText: 'FASH TRANSPORT SERVICES',
        heading1 :'Efficient Transportation Solutions: ',
        heading2 : 'Moving Your Goods Safely',
        description1: 'Choose from our wide range of transport tracks ',
        description2: 'and book them to ensure timely delivery of your goods',

    },

    {
        id:2,
        WelcomeText: 'WELCOME TO FASH TRANSPORT SERVICES',
        heading1 : 'Efficient Transportation Solutions: ',
        heading2 : 'Moving Your Goods Safely',
        description1 : 'Choose from our wide range of transport tracks ',
        description2 : 'and book them to ensure timely delivery of your goods',

    }
]

    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds
        
      };

    return(
      <div id="root">
        <section className="banner_main">
        <Slider className="custom-slider" {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className={`carousel-item${slide.id}`}>
              <div className="slide-content">
                <div className="welcome">  
                  <h4>{slide.WelcomeText}</h4>
                </div>
                <h2>{slide.heading1}</h2>
                <h2>{slide.heading2}</h2>

                <p>{slide.description1}</p>
                <p>{slide.description2}</p>

                <div className="gl-buttons">
        <Button className="g-button" variant="primary" onClick={handleSignupClick}>
          <span>Get Started</span>
        </Button>
        <Button className="l-button" variant="primary" onClick={handleLoginClick}>
          Login
        </Button>
      </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <About/>
      <Services/>
      <Feature/>
      <Courses/>
      <Team/>
      
      <Scrollbutton/>
      </div>
      
    );
  };

export default Index;