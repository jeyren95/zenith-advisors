import React from "react";
import HomeNavbar from "../navbar/HomeNavbar";

import "./HomeIntroduction.css";

class Introduction extends React.Component {
  render() {
    return (
      <div className="home-introduction">
        <HomeNavbar
        introduction="home-introduction"
        leaders="leaders"
        lifeAtZenith="life-at-zenith"
        contact="contact"
        />
        <div className="introduction-caption">
          <h1 className="dynamic-caption animate__animated animate__slideInLeft">Dynamic.</h1>
          <h1 className="enterprising-caption animate__animated animate__slideInLeft animate__delay-1s">Enterprising.</h1>
          <h1 className="driven-caption animate__animated animate__slideInLeft animate__delay-2s">Driven.</h1>
        </div>

      </div>
    )
  }
}

export default Introduction;
