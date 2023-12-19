import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg">
      <div className="bg"><br/><br/><br/>
        <h1 className="heading">Become A Product Manager In <div/>12 weeks</h1>
        <br/>
        <h2 className="subh">No Prior Experience Required*</h2><br/>
        <ul className="list1">
            <li>Live sessions on Zoom</li>
            <li>6 to 12 week program timeline</li>
            <li>Mentorship with experienced PM's</li>
            <li>Placement support for one year</li>
        </ul>
        <button class="bg-blue-500 text-white p-4 rounded-full">
            Apply for Program
        </button>
        </div>
    </div>
  );
};

export default HeroSection;
