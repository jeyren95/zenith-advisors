import React from "react";
import {Link} from "react-router-dom"

import "./Navbar.css"

class LifeNavbar extends React.Component {

  render() {
    return (
      <nav id="life-navbar" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="d-flex flex-nowrap w-100">
          <Link to="/" className="navbar-brand"><img src="../images/logo/logo-img.png" alt="logo-img" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="home-link nav-item">
              <a className="nav-link text-nowrap" href={this.props.introduction}>Home</a>
            </li>
            <li className="home-link nav-item">
              <a className="nav-link text-nowrap" href={this.props.leaders}>Our Founders</a>
            </li>
            <li className="life-at-zenith-link nav-item">
              <Link className="nav-link text-nowrap" to={this.props.lifeAtZenith}>Life At Zenith</Link>
            </li>
            <li className="contact-link nav-item">
              <a className="nav-link text-nowrap" href={this.props.contact}><button className="btn btn-outline-light" type="button">Contact Us</button></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default LifeNavbar
