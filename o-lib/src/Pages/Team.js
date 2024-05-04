import React from "react";
import t1 from "../Images/t1.jpg";
import t2 from "../Images/t2.jpg";
import t3 from "../Images/t3.jpg";
import t4 from "../Images/t4.jpg";
import t5 from "../Images/t5.jpg"
import t6 from "../Images/t6.jpg";
import Scrollbutton from "../Components/Scrollbutton";

const Team =()=>{
    return(
        <div>
            <div className="teachers-section">
                <div className="vertical-teachers"></div>
                <h1 className="our-teacher">MEET OUR <span>TEAM</span></h1>
                <div className="teachers-container">
                    <div className="teachers">
                        <div className="curve"></div>
                        <div className="oval"></div>
                        <img className="t1" src={t1} alt="t1"/>
                        <h3>FREDY</h3>
                        <h4>Transport Manager</h4>
                        <div className="t-info"></div>
                    </div>
                    <div className="teachers">
                        <div className="curve"></div>
                        <div className="oval"></div>
                        <img className="t1" src={t2} alt="t1"/>
                        <h3>CRISSY</h3>
                        <h4>Logistics Coordinator</h4>
                        <div className="t-info"></div>
                    </div>
                    <div className="teachers">
                        <div className="curve"></div>
                        <div className="oval"></div>
                        <img className="t1" src={t3} alt="t3"/>
                        <h3>WINNY</h3>
                        <h4>Customer Support Specialist</h4>
                        <div className="t-info"></div>
                    </div>
                    <div className="teachers">
                        <div className="curve"></div>
                        <div className="oval"></div>
                        <img className="t1" src={t4} alt="t1"/>
                        <h3>HAMARA</h3>
                        <h4>Transport Planner</h4>
                        <div className="t-info"></div>
                    </div>
                    <div className="teachers">
                        <div className="curve"></div>
                        <div className="oval"></div>
                        <img className="t1" src={t5} alt="t5"/>
                        <h3>HARRISON</h3>
                        <h4>Route Optimization Specialist</h4>
                        <div className="t-info"></div>
                    </div>
                    <div className="teachers">
                        <div className="curve"></div>
                        <div className="oval"></div>
                        <img className="t1" src={t6} alt="t6"/>
                        <h3>SYDNEY</h3>
                        <h4>Transport Technology Expert</h4>
                        <div className="t-info"></div>
                    </div>
                </div>
            </div>
            <Scrollbutton/>
        </div>
    )
}
export default Team;
