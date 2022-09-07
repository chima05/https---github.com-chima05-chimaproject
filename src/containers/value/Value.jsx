import React from "react";
import "./value.css";

import left1 from "../../assets/left1.png";
import left2 from "../../assets/left2.png";
import right1 from "../../assets/right1.png";

const Value = () => {
  return (
    <div className="baldoo__value section__padding">
      <div className="baldoo__value-container">
        <div className="baldoo__value-content">
          <h5>Our values</h5>
          <h3>Things in we believe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
            atque pariatur sit animi ipsum voluptatum expedita blanditiis, ea
            iusto aut magnam fugiat quibusdam repellendus est assumenda? Labore
            aut error esse itaque nostrum. Et, deleniti.
          </p>
          <div className="baldoo__value-context">
            <img src={left1} alt="manager" />
            <div className="baldoo__value-context-details">
              <h4>We are committed.</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi doloremque id ad. Optio corporis totam tempore
                laboriosam at! Alias, sunt?
              </small>
            </div>
          </div>
          <div className="baldoo__value-context">
            <img src={left2} alt="manager" />
            <div className="baldoo__value-context-details">
              <h4>We are responsible.</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi doloremque id ad. Optio corporis totam tempore
                laboriosam at! Alias, sunt?
              </small>
            </div>
          </div>
          <div className="baldoo__value-context">
            <img src={right1} alt="manager" />
            <div className="baldoo__value-context-details">
              <h4>We aim for progress.</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi doloremque id ad. Optio corporis totam tempore
                laboriosam at! Alias, sunt?
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
