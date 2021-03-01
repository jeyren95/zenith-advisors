import React from "react";

import Heading from "../heading/Heading";

import "./Leaders.css";

class Leaders extends React.Component {

  render() {
    return (
      <div className="leaders">

        <Heading title="Meet Our Founders" />

        <div className="descriptions-of-leaders">
          <div className="row">
            <div className="col-sm-5 order-sm-2">
              <img src="../images/leaders/calvin-tan-img.jpeg" alt="calvin-tan-img" />
            </div>
            <div className="col-sm-7 order-sm-1">
              <div className="leader-background">
                <i className="fas fa-quote-left fa-3x"></i>
                <p>A career in financial planning has gifted me with an <span>exceptionally
                rewarding experience</span>, enabling me to reach my <span>fullest potential</span>
                 , all while still maintaining <span>great flexibility</span> in my schedule.
                </p>
              </div>
              <div className="leader-name">
                <h5>Calvin Tan <span>- Senior Director, Financial Services</span></h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-5">
              <img src="../images/leaders/robert-tan-img.jpeg" alt="robert-tan-img" />
            </div>
            <div className="col-sm-7">
              <div className="leader-background">
                <i className="fas fa-quote-left fa-3x"></i>
                <p>The <span>endless opportunities to build meaningful connections</span> with
                new people, and <span>making an impact</span>  on their
                lives was what attracted me to join the financial planning industry.
                </p>
              </div>
              <div className="leader-name">
                <h5>Robert Tan <span>- Senior Director, Financial Services</span></h5>
              </div>
            </div>
          </div>

        </div>
      </div>



    )
  }
}

export default Leaders
