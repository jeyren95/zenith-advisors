import React from "react";

import "./Footer.css";

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <p><i className="far fa-copyright"></i>2021 Zenith Advisors - Last updated on 08 Apr 2021</p>
        <p>DRC-WS/2021/0904/44</p>
        <div className="disclaimer-statement">
          <p>Disclaimer Statement</p>
          <p>The views and opinions expressed in this website are solely that of the author and do not necessarily reflect the opinion of The Great
            Eastern Life Assurance Co Ltd ("Great Eastern Life"). For the avoidance of doubt, Great Eastern Life does not make any representations or
            warranties, express or implied, as to the completeness or accuracy of the information contained in this website. Further, Great Eastern Life
            expressly disclaims any and all liability relating to or arising from the use of and/or reliance on the information contained in this website.
            The information contained in this website is for your information only and does not have regard to the specific investment objectives, financial
            situation and particular needs of any person(s).
          </p>
        </div>

      </footer>
    )
  }


}


export default Footer
