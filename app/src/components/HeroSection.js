import React from "react";
import "../App.css";
import "./HeroSection.css";
import Img7 from "../assets/images/img-7.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="head-text">
        <div className="head-image">
          <img class="top-img" src={Img7} alt="Wops" />
        </div>
        <div class="text-on-image">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default HeroSection;
