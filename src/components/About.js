import React from "react";
import aboutimage from "../assets/about.png";

export const About = () => {
  return (
    <>
      <div id="about">
        <div className="about-image">
          <img src={aboutimage} alt="" />
        </div>

        <div className="about-text">
          <h1>LEARN MORE ABOUT US</h1>
          <p>
            At our Gym, we believe that fitness is not just a routine but a
            lifestyle. Our mission is to inspire and support our community in
            leading healthier, more active lives. Whether you're just starting
            your fitness journey or looking to take your training to the next
            level, we're here to help you achieve your goals.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </>
  );
};
