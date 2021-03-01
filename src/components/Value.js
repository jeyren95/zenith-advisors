import React from "react";

import "./Value.css";

import {Carousel} from "react-bootstrap";
import images from "../images";


class Value extends React.Component {
  renderImages() {
    return images.map((image) => {
      return (
        <Carousel.Item key={image.number} className={`carousel-item ${image.class}`} interval={3000}>
          <img src={`../images/values/${this.props.sectionId}/image${image.number}.jpg`} alt="" />
        </Carousel.Item>
      )
    })
  }


  render() {
    return (
      <div className={`each-value ${this.props.sectionId}`}>

        <div className="row">
          <div className={`col-sm-6 value-caption ${this.props.second}`}>
            <div className="caption-heading">
              <h1>{this.props.header}</h1>
              <img src={this.props.icon} alt="icon-img" />
            </div>
            <div className="caption-text">
              <p>{this.props.caption}</p>
            </div>
          </div>

          <div className={`col-sm-6 value-image ${this.props.first}`}>
            <Carousel>
              {this.renderImages()}
            </Carousel>
          </div>
        </div>


      </div>
    )
  }
}

export default Value;
