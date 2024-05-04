import React from "react";
import "../Css/styling.css";
import Scrollbutton from "../Components/Scrollbutton";

const Courses = () => {
  return (
    <div>
      <div className="courses-page">
        <div className="courses-vertical"></div>
        <h1>EXPLORE OUR <span>POPULAR</span> <br/>TRANSPORT <span>SERVICES</span></h1>
        <div className="course-container">
          <div className="courses">
            <h3>EXPRESS DELIVERY</h3>
            <p>Experience swift and reliable express delivery services tailored to meet your urgent transport needs.</p>
          </div>
          <div className="courses">
            <h3>TEMPERATURE-CONTROLLED TRANSPORT</h3>
            <p>Ensure the safety and integrity of your temperature-sensitive cargo with our specialized transport solutions.</p>
          </div>
          <div className="courses">
            <h3>FREIGHT FORWARDING</h3>
            <p>Optimize your supply chain with our efficient freight forwarding services, streamlining the movement of your goods across various destinations.</p>
          </div>
          <div className="courses">
            <h3>WAREHOUSING AND DISTRIBUTION</h3>
            <p>Benefit from our comprehensive warehousing and distribution solutions, facilitating seamless inventory management and distribution processes.</p>
          </div>
          <div className="courses">
            <h3>CUSTOMS CLEARANCE</h3>
            <p>Navigate through customs procedures effortlessly with our expert customs clearance services, ensuring compliance and efficiency in international shipments.</p>
          </div>
          <div className="courses">
            <h3>LAST-MILE DELIVERY</h3>
            <p>Complete the final leg of your supply chain with our reliable last-mile delivery services, ensuring prompt and accurate delivery to your customers' doorsteps.</p>
          </div>
          <div className="courses">
            <h3>LOGISTICS CONSULTING</h3>
            <p>Unlock the full potential of your logistics operations with our strategic consulting services, providing expert insights and tailored solutions to optimize your transport processes.</p>
          </div>
          <div className="courses">
            <h3>TRACK AND TRACE</h3>
            <p>Stay informed and in control of your shipments with our advanced track and trace technology, enabling real-time monitoring and status updates throughout the transport journey.</p>
          </div>
          <div className="courses">
            <h3>HAULAGE SERVICES</h3>
            <p>Relax knowing your heavy or oversized cargo is in safe hands with our specialized haulage services, ensuring efficient and secure transportation.</p>
          </div>
        </div>
      </div>
      <Scrollbutton/>
    </div>
  );
};

export default Courses;
