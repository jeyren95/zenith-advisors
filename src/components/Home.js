import React from "react";

import Introduction from "./Introduction";
import Leaders from "./Leaders";
import LifeAtZenith from "./LifeAtZenith";
import Contact from "./Contact";
import Footer from "./Footer";

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
        <Introduction />
        <Leaders />
        <LifeAtZenith />
        <div className="logo-background">
          <img src="../images/background/logo-img.png" alt="logo-img" />
        </div>
        <Contact />
        <Footer />
      </div>
    )

  }

}

export default Home;
