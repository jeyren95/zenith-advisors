import React from "react";

import "./Heading.css";

class Heading extends React.Component {

  render() {
    return (
      <div className="heading">
        <h1>{this.props.title}</h1><hr />
      </div>
    )
  }
}

export default Heading
