import React, { useEffect } from "react";
import l7 from "../Images/l7.jpg";
import Scrollbutton from "../Components/Scrollbutton";

const About = () => {
  useEffect(() => {
    let transportsCount = 100;
    let routesCount = 50;
    let clientsCount = 150;
    let destinationsCount = 20;

    function updateCountsOnScroll() {
      if (window.scrollY > 300) {
        updateCount("transportsCount", transportsCount);
        updateCount("routesCount", routesCount);
        updateCount("clientsCount", clientsCount);
        updateCount("destinationsCount", destinationsCount);
      }
    }

    // Function to update count for a specific section
    function updateCount(elementId, count) {
      let element = document.getElementById(elementId);
      let currentCount = 0;
      let updateInterval = setInterval(function () {
        if (element) {
          element.textContent = currentCount;
          currentCount++;
          if (currentCount > count) {
            clearInterval(updateInterval);
            element.textContent = count;
          }
        }
      }, 10);
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", updateCountsOnScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateCountsOnScroll);
    };
  }, []);

  return (
    <div className="about">
      <div className="vertical-about"></div>
      <h3>About<span> FASH TRANSPORT SERVICES</span></h3>
      <div className="all-containers">
        <div className="about-container1">
          <img className="a-image" src={l7} alt="" />
        </div>
        <div className="about-container2">
          <h4>Embarking on a <span>Transport Journey:</span> <br />Crafting a <span>Digital Platform </span> for Efficient Logistics</h4>
        </div>
      </div>
      <div className="about-container3">
        <h3>Bridging Distances through Transport:</h3>
        <p><span>Discover the philosophy guiding our endeavor. From ensuring seamless <br />transportation to championing the efficiency of logistics,<br />explore how we're bridging distances in the ever-evolving landscape<br />of transport services.</span></p>
        <button className="Learn-more-button">Learn more</button>
      </div>
      <div className="division">
        <div className="section">
          <h2>Transports</h2>
          <p id="transportsCount">0</p>
        </div>
        <div className="section">
          <h2>Routes</h2>
          <p id="routesCount">0</p>
        </div>
        <div className="section">
          <h2>Clients</h2>
          <p id="clientsCount">0</p>
        </div>
        <div className="section">
          <h2>Destinations</h2>
          <p id="destinationsCount">0</p>
        </div>
      </div>
      <Scrollbutton/>
    </div>
  );
}

export default About;
