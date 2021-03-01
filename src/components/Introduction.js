import React from "react";
import HomeNavbar from "./HomeNavbar";

class Introduction extends React.Component {
  render() {
    return (
      <section id="introduction">
        <HomeNavbar
        introduction="introduction"
        leaders="leaders"
        lifeAtZenith="life-at-zenith"
        contact="contact"
        />
        <div className="container-fluid">
          <div className="introduction-caption">
            <h1 className="dynamic-caption animate__animated animate__slideInLeft">Dynamic.</h1>
            <h1 className="enterprising-caption animate__animated animate__slideInLeft animate__delay-1s">Enterprising.</h1>
            <h1 className="driven-caption animate__animated animate__slideInLeft animate__delay-2s">Driven.</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Introduction;
