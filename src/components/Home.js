import React from "react";

import HomeIntroduction from "./introduction/HomeIntroduction";
import Leaders from "./leaders/Leaders";
import LifeAtZenith from "./life-at-zenith/LifeAtZenith";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

import "./Home.css";

class Home extends React.Component {

  render() {
    return (
      <div>
        <HomeIntroduction />
        <Leaders />
        <LifeAtZenith />
        <Contact />
        <Footer />
      </div>
    )

  }

}

export default Home;
