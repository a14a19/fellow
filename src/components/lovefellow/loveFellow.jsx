import React from "react";
import "./LoveFellow.css";
import yellow from "../../assets/yellow.png";
import blue from "../../assets/blue.png";
import pink from "../../assets/pink.jpg";

const LoveFellow = () => {
  return (
    <div className="w-full bg-[#FFF]">
      <div className="container-1280px join-container">
        <h1>Top Product Managers Love Fellow. Here's Why:</h1>
        <p className="sub-heading">
          We get the recruiters to you. We help you thrive. We only work with the
          best in the business.
        </p>
        <div className="flex">
          <div className="image-container pink">
            <img src={pink} alt="Pink Image" />
            <div className="overlay"></div>
            <div className="content">
              <p className="text-yellow">
                Guarantee job security with a platform that looks out for you.
              </p>
              <p>
                Fellow offers full-term health insurance and assists you with all
                contractual paperwork during hiring. We keep your employees
                accountable every step of the way.
              </p>
            </div>
          </div>
          <div className="image-container yellow">
            <div className="yellow-inner">
              <img src={yellow} alt="Yellow Image" />
            </div>
            <div className="overlay-yellow"></div>
            <div className="content-yellow">
              <p className="text-yellow">Join a global dev aggregate.</p>
              <p>
                Local recognition does not cut it anymore. Get vetted and join a
                curated list of top developers from around the world.
              </p>
            </div>
          </div>
        </div>
        <div className="blue1">
          <div className="image-container blue">
            <div className="blue-inner">
              <img src={blue} alt="Blue Image" />
            </div>
            <div className="overlay-blue"></div>
            <div className="content-blue">
              <p className="text-blue">Find a lifelong career partner.</p>
              <p>
                Your journey with Pesto doesn't end when you land a job. Use our
                platform to find exciting career growth opportunities when you
                want to switch jobs, and find mentors for life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveFellow;
