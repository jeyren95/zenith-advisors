import React from "react";

import Heading from "../heading/Heading";

import "./Contact.css";

class Contact extends React.Component {
  state = {
    messageConsent: "No",
    callConsent: "No"
  }

  handleMessageCheckboxClick = () => {
    if (this.state.messageConsent === "No") {
      this.setState({messageConsent: "Yes"})
    } else if (this.state.messageConsent === "Yes") {
      this.setState({messageConsent: "No"})
    }
  }

  handleCallCheckboxClick = () => {
    if (this.state.callConsent === "No") {
      this.setState({callConsent: "Yes"})
    } else if (this.state.callConsent === "Yes") {
      this.setState({callConsent: "No"})
    }
  }

  render() {
    return (
      <div className="contact">
        <Heading title="Ready To Join The Zenith Family?" />
        <div className="background-heading">
          <h1>Contact Us</h1>
        </div>

        <div className="ui raised segment">
          <div className="row">
            <div className="col-sm-8">
              <form className="ui form" action="https://formspree.io/f/mjvpooro" method="post">
                <div className="field"><i className="far fa-user"></i><input type="text" name="Name" placeholder="Your Name" /></div>
                <div className="field"><i className="fas fa-mobile-alt"></i><input type="text" name="Contact Number" placeholder="Your Contact Number" /></div>
                <div className="field"><i className="far fa-envelope envelope-outline"></i><input type="email" name="Email" placeholder="Your Email" /></div>
                <div className="field"><i className="fas fa-pen-alt"></i><textarea name="Message" placeholder="Your message"></textarea></div>

                <div className="marketing-consent-statement">
                  <h6>Marketing Consent</h6>
                  <p>We want to ensure that you fully enjoy our services and products as we update you on relevant news, promotions and advice. We will
                  keep in touch with you through post, digital platforms (including social media), and email.
                  </p>
                  <p>Please indicate below if you consent to us* to also contact you for the above-mentioned purposes via the methods below:</p>
                </div>

                <div className="field">
                  <div className="ui checkbox">
                    <input
                    id="text-consent-checkbox"
                    type="checkbox"
                    className="hidden"
                    tabIndex="0"
                    onClick={this.handleMessageCheckboxClick}
                    />
                    <label>Phone number-based messaging</label>
                    <input id="text-consent" type="text" name="Phone Number Messaging Consent" style={{display: "none"}} value={this.state.messageConsent} />
                  </div>
                </div>
                <div className="field">
                  <div className="ui checkbox">
                    <input
                    id="call-consent-checkbox"
                    type="checkbox"
                    className="hidden"
                    tabIndex="0"
                    onClick={this.handleCallCheckboxClick}
                    />
                    <label>Voice Calls</label>
                    <input id="call-consent" type="text" name="Voice Call Consent" style={{display: "none"}} value={this.state.callConsent} />
                  </div>
                </div>

                <div className="privacy-importance-statement">
                  <p>Your privacy is of utmost importance to us and you can withdraw your consent via Great Eastern's website at any time.</p>
                  <p>We/Us refers to Great Eastern, our related corporations, respective representatives and agents. For more details, please refer
                  to the Privacy and Security Policy on Great Eastern's website.
                  </p>
                </div>

                <button className="btn btn-outline-light" type="submit">Submit</button>
              </form>
            </div>

            <div className="col-sm-4 zenith-contact">
              <div className="email">
                <h6><i className="fas fa-envelope envelope-solid"></i>Email Us</h6>
                <p>admin@zenithadvisors.sg</p>
              </div>
              <div className="phone-number">
                <h6><i className="fas fa-phone-alt"></i>Call Us</h6>
                <p>+65 6508 4507</p>
              </div>
              <div className="location">
                <h6><i className="fas fa-map-marker-alt"></i>Find Us</h6>
                <p>2 Tanjong Katong Road <br /> #11-00 Paya Lebar Quarter 3 <br /> Singapore 437161</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
