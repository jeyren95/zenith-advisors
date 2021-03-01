import React from "react";

import values from "../values";

import LifeIntroduction from "./introduction/LifeIntroduction";
import Value from "./Value";
import Footer from "./footer/Footer";

class Life extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderValues() {
    return values.map((value) => {
      return (
        <Value
        key={value.sectionId}
        sectionId={value.sectionId}
        header={value.header}
        caption={value.caption}
        icon={value.icon}
        first={value.first}
        second={value.second}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <LifeIntroduction />
        {this.renderValues()}
        <Footer />
      </div>
    )
  }
}

export default Life;
