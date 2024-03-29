import React from "react";
import "./header.css";
import CallToActionBTN from "./CallToActionBTN";
import StephanDuValPhoto from "../../assets/stephanduval-image.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <div className="shrink__margin-top">
          <h1>Stephan DuVal</h1>
        </div>
        <h5 className="text-light">Fullstack Developer</h5>
        <CallToActionBTN />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Contact Me
        </a>

        <div className="stephanduvalphoto">
          <img src={StephanDuValPhoto} alt="myphoto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
//
