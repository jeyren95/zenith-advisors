import React from "react";

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
      <section id={this.props.sectionId}>
        <div className="each-value container-fluid">
          <div className="row">
            <div className={`col-sm-6 value-caption ${this.props.second}`}>
              <div className="heading">
                <h1>{this.props.header}</h1>
                <img src={this.props.icon} alt="icon-img" />
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
      </section>
    )
  }
}

export default Value;



//<div id={`${this.props.sectionId}-carousel`} className="carousel slide carousel-fade" data-ride="carousel">
//  <ol className="carousel-indicators">
//    <li data-target={`#${this.props.sectionId}-carousel`} data-slide-to="0" className="active"></li>
//    <li data-target={`#${this.props.sectionId}-carousel`} data-slide-to="1"></li>
//    <li data-target={`#${this.props.sectionId}-carousel`} data-slide-to="2"></li>
//  </ol>
//  <div className="carousel-inner">
//    {this.renderImages()}
//  </div>
//</div>
