import React from "react";
import "./brand.css";
import dropbox from "../../assets/dropbox.png";
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";

const Brand = () => {
  return (
    <div className="gbt3_brand">
      <img src={dropbox} alt="dropbox" />
      <img src={google} alt="google" />
      <img src={shopify} alt="shopify" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="slack" />
    </div>
  );
};

export default Brand;
