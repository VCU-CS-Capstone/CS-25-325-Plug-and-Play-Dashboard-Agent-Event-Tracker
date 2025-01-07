import React, { useState } from "react";
import "./Advisor.css";

const Advisor = () => {
    return (
        <div className="advisor-box">
            <h2>Contact an Advisor</h2>
            <p>
              If help is needed click below to notify an advisor, 
              they will be in contact with you as soon as possible. 
            </p>
            <button className="button">Contact an Advisor</button>
          </div>
    );
};

export default Advisor;