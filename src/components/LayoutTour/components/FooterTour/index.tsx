import React from "react";
import Logo from "../../../../assets/logo.svg";
import NavigationBar from "../NavigationBar";
import "./index.scss";

const FooterTour = () => {
  // const listIcon = {
  //   map: 
  // }
  return (
    <div className="footer-tour">
      <div className="footer-tour-left">
        <img src={Logo} alt="" />
        <p>
          always bring you great experiences with your loved ones please share
          and enjoy it
        </p>
        <NavigationBar />
      </div>
      <div className="footer-tour-center">
        <h1>contact us</h1>

      </div>
      <div></div>
    </div>
  );
};

export default FooterTour;
