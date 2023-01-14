import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gbt3_footer gradienr_bg">
      <div className="gbt3_footer_header">
        <h1 className="gradienr_text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gbt3_footer_links">
        <div className="footer_item">
          <img src={logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="item">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="item">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="item">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>0650630566</p>
          <p>mahdimama04@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
