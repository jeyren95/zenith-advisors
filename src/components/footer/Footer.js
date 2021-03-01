import React from "react";

import "./Footer.css";

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <p><i className="far fa-copyright"></i>2020 Zenith Advisors</p>
        <div className="disclaimer-statement">
          <p>Disclaimer Statement</p>
          <p>Any views, opinions, references, assertions of fact and/or other statements that the author sets out on this website are personal views
          and are not necessarily the views held by Great Eastern group. The Great Eastern Group disclaims any liability whatsoever that may arise
          out of or in connection with such statements.
          </p>
        </div>

      </footer>
    )
  }


}


export default Footer
