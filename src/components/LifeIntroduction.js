import React from "react";
import Navbar from "./Navbar"

class LifeIntroduction extends React.Component {

  render() {
    return (
      <section id="life-introduction" >
        <Navbar
        introduction="/#introduction"
        leaders="/#leaders"
        lifeAtZenith="/life-at-zenith"
        contact="/#contact"
        />
        <div className="container-fluid">
          <h1 id="life-introduction-caption">Life At Zenith Is...</h1>
        </div>
      </section>
    )
  }

}


export default LifeIntroduction
