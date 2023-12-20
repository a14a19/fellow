import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg pb-16">
      <div className="bg"><br /><br /><br />
        <h1 className="heading">Become A <span className="bg-clip-text" style={{ backgroundImage: "linear-gradient(#fda8d8,#fb7cf4)", WebkitTextFillColor: "transparent" }}>Product Manager</span> In <div />12 weeks</h1>
        <br />
        <h2 className="subh">No Prior Experience Required*</h2><br />
        {/* <ul className="list1">
          <li>Live sessions on Zoom</li>
          <li>6 to 12 week program timeline</li>
          <li>Mentorship with experienced PM's</li>
          <li>Placement support for one year</li>
        </ul> */}
        <div className="flex justify-center p-6">
          <button className="bg-blue-500 text-white p-4 rounded-full">
            Apply for Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
