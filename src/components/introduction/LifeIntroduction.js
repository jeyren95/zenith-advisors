import React from "react";
import LifeNavbar from "../navbar/LifeNavbar";

import "./LifeIntroduction.css";

class LifeIntroduction extends React.Component {

  render() {
    return (
      <div className="life-introduction" >
        <LifeNavbar
        introduction="/#introduction"
        leaders="/#leaders"
        lifeAtZenith="/life-at-zenith"
        contact="/#contact"
        />
        <div className="life-introduction-caption">
          <h1>Life At Zenith Is...</h1>
        </div>
      </div>
    )
  }

}


export default LifeIntroduction
