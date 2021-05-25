import React from "react";
import {Link} from "react-scroll";

import "./Navbar.css";

class HomeNavbar extends React.Component {

  render() {
    return (
      <nav id="life-navbar" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="d-flex flex-nowrap w-100">
          <a href="/" className="navbar-brand"><img src="../images/logo/logo-img.png" alt="logo-img" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="home-link nav-item">
              <Link className="nav-link text-nowrap" to={this.props.introduction} spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
            </li>
            <li className="home-link nav-item">
              <Link className="nav-link text-nowrap" to={this.props.leaders} spy={true} smooth={true} offset={-70} duration={500}>Our Founding Agency Leaders</Link>
            </li>
            <li className="life-at-zenith-link nav-item">
              <Link className="nav-link text-nowrap" to={this.props.lifeAtZenith} spy={true} smooth={true} offset={-70} duration={500}>Life At Zenith</Link>
            </li>
            <li className="contact-link nav-item">
              <Link className="nav-link text-nowrap" to={this.props.contact} spy={true} smooth={true} offset={-70} duration={500}><button className="btn btn-outline-light" type="button">Contact Us</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default HomeNavbar;
