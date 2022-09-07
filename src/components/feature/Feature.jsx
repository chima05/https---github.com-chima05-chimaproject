import React from "react";
import "./feature.css";

import left1 from "../../assets/left1.png";
import left2 from "../../assets/left2.png";
import center from "../../assets/center.png";
import right1 from "../../assets/right1.png";
import right2 from "../../assets/right2.png";

const Feature = () => {
  return (
    <div className="baldoo__header-image-container">
      <div className="baldoo__header-image-section">
        <div className="baldoo__header-left">
          <img src={left1} alt="left1" />
          <img src={left2} alt="left2" />
        </div>
        <div className="baldoo__header-center">
          <img src={center} alt="center" />
        </div>
        <div className="baldoo__header-right">
          <img src={right1} alt="right1" />
          <img src={right2} alt="right2" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
