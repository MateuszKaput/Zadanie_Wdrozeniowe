import React from "react";
import "../App.css";
import "./HeroSection.css";
import Kittens from "./Kittens";
import paraJeden from "../assets/images/paraJeden.JPG";
import paraDwa from "../assets/images/paraDwa.JPG";

const fb =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1024px-Facebook_icon_2013.svg.png";
const insta =
  "https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-png-instagram-logo-camel-productions-website-25.png";
const yt =
  "https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png";
const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inv reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <div className="head-text">
          <Kittens />
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
        <div className="para">
          <h1>Nasza Para</h1>
          <div className="paraJeden">
            <img src={paraJeden} alt=""></img>
            <h4>Emil</h4>
            <p>{loremIpsum}</p>
          </div>
        </div>
        <div className="para">
          <div className="paraDwa">
            <img src={paraDwa} alt=""></img>
            <h4>Barbara</h4>
            <p>{loremIpsum}</p>
          </div>
        </div>
        <div className="stopka">
          <div className="stopkaLewa">
            <p>Kocioł Hodowla Kotów Dachowych</p>
            <p>ul. Kocia 66, 33-100 Tarnów</p>
            <p>tel. 500 600 700</p>
          </div>
          <div className="stopkaPrawa">
            <p>Wydarzenia</p>
            <p>Galeria</p>
            <p>Sklep</p>
            <p>Copyright Dupa Sp. z o. o. 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
