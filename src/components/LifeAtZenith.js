import React from "react";
import {Link} from "react-router-dom";


class LifeAtZenith extends React.Component {
  render() {
    return (
      <section id="life-at-zenith">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <img src="../images/background/life-at-zenith-image.jpg" alt="life-at-zenith" />
            </div>
            <div className="col-sm-6">
              <h1>Curious About Life At Zenith?</h1>
              <Link to="/life-at-zenith"><button className="btn btn-outline-light" type="button">FIND OUT MORE HERE</button></Link>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default LifeAtZenith;
