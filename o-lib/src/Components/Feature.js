import React from "react";
import ScrollAnimation from "./ScrollAnimation ";
import "../Css/ScrollAnimation.css"

const Feature=()=>{
  const { ref, isVisible } = ScrollAnimation();

    return(
        <div>
            <div className="feature">
                <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
                <div className="vertical"></div>
                <div className="our-feature">
                    <h1>DISCOVER OUR <span>FEATURES</span></h1>
                </div>
                </div>
                <p>Explore the exceptional features that distinguish FASH TRANSPORT SERVICES as a premier logistics solution provider.<br/> Benefit from a diverse range of services, enjoy seamless accessibility, and engage<br/> in interactive experiences tailored to your transport needs.</p>

                <div className="overall">
                    <div className="container">
                        <div className="small-container">
                            <h2>Diverse Service Range</h2>
                            <p>Explore a comprehensive range of transport services catering to various cargo types and destinations, ensuring versatile solutions for your logistics requirements.</p>
                        </div>
                        <div className="small-container">
                            <h2>24/7 Support</h2>
                            <p>Experience round-the-clock customer support, providing assistance and guidance at every step of your transport journey, ensuring peace of mind and reliability.</p>
                        </div>
                        <div className="small-container">
                            <h2>Interactive Booking</h2>
                            <p>Engage with our user-friendly booking platform, facilitating seamless reservation processes with real-time tracking and personalized service options, ensuring convenience and efficiency.</p>
                        </div>
                    </div>
                    <div className="container-b">
                        <p>You can Book Your Transport Service <br/>Track Booking</p>
                        <form className="f-form">
                            <div>
                                <input type="text" id="from" placeholder="Pickup Location"/>
                            </div>
                            <div>
                                <input type="text" id="to" placeholder="Destination"/>
                            </div>
                            <div>
                                <input type="text" id="cargo" placeholder="Type of Cargo"/>
                            </div>
                            <button className="f-button">Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature;
