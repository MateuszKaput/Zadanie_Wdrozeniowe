import React from "react";
import "../App.css";
import "./HeroSection.css";
import Img1 from "../assets/images/img-7.jpg";
import Fact from "./Fact";

const fb =
  "https://lh3.googleusercontent.com/proxy/JcuAQpoFIJYYMnUVscZtCt5TGMyGkp6glAi0fmJ2HcdZDq5aRjHdkxRkAToWJB-ZvuLXTSWUTSr7EOFkF3O4yzOQLxes8fJ6vGAgr6COURUOH6FhrROs";
const insta =
  "https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-png-instagram-logo-camel-productions-website-25.png";
const yt =
  "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png";
//const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inv reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <div className="head-text">
          <div className="head-image">
            <img className="top-img" src={Img1} alt="Wops" />
          </div>
          <Fact />
        </div>

        <div className="who_we_are">
          <h1>Kim jesteśmy?</h1>
          <p>{loremIpsum}</p>
        </div>
        <div className="social">
          <div className="social_icons">
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
              <img src={fb} alt="" />
            </a>
          </div>
          <div className="social_icons">
            <a
              href="https://www.instagram.com"
              rel="noreferrer"
              target="_blank"
            >
              <img src={insta} alt="" />
            </a>
          </div>
          <div className="social_icons">
            <a href="https://www.youtube.com" rel="noreferrer" target="_blank">
              <img src={yt} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
