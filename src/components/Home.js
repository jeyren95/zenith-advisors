import React from "react";

import HomeIntroduction from "./introduction/HomeIntroduction";
import Leaders from "./leaders/Leaders";
import LifeAtZenith from "./life-at-zenith/LifeAtZenith";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

import history from "../history"
import "./Home.css";

class Home extends React.Component {
  authorizeUser() {
    const password = prompt("Enter password")
    if (password === "zenithalliance") {
      history.push("/")
    } else if (password !== "zenithalliance") {
      window.location.reload(true);
    }
  }

  componentDidMount() {
    this.authorizeUser();
  }

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
