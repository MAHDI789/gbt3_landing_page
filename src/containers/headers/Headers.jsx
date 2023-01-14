import React from "react";
import "./headers.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Headers = () => {
  return (
    <div className="gbt3_header">
      <div className="gbt3_header_info">
        <h1 className="gradienr_text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="gpt3__header_subs">
          <img src={people} alt="people" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className="gbt3_header_image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Headers;
