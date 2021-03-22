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
                <div className="field"><i className="far fa-user"></i><input type="text" name="Name" placeholder="Name (as in NRIC/Passport)" /></div>
                <div className="field"><i className="fas fa-mobile-alt"></i><input type="text" name="Contact Number" placeholder="Your Contact Number*" /></div>
                <div className="field"><i className="far fa-envelope envelope-outline"></i><input type="email" name="Email" placeholder="Your Email" /></div>
                <div className="field"><i className="fas fa-pen-alt"></i><textarea name="Message" placeholder="Your message"></textarea></div>

                <div className="recruitment-consent-statement">
                  <h6>Recruitment Consent</h6>
                  <p>I would like to stay in touch with The Great Eastern Life Assurance Company Limited/Great Eastern Financial Advisers Pte Ltd and its related
                    corporations (collectively, the "Companies") for the purpose of receiving updates on any job opportunities
                  </p>
                  <p>By providing the information set out above, I agree and consent to the Companies, as well as their respective representatives, agents, the 
                    Companies' authorised service providers and relevant third parties, collecting, using and/or disclosing my personal data for purposes reasonably
                    required by the Company in connection to contacting me about any relevant job opportunities (which the Companies deem suitable) and/or processing
                    my job application. The purposes relating to the foregoing are set out in Great Eastern's Privacy Statement, which is accessible from Great Eastern
                    Singapore's website, which I confirm I have read and understood.
                  </p>
                  
                  <p>*This option includes voice calls, phone number-based messaging (e.g. SMS/MMS, WhatsApp, WeChat) and fax via my Singapore telephone number(s)
                    provided here as well as any future updates to this number.
                  </p>
                </div>

                <div className="privacy-importance-statement">
                  <p>Your privacy is of utmost importance to us. Should you wish to withdraw your consent to use your above personal data for recruitment purpose at 
                    any time, do email us at Lifeproofcareer@greateasternlife.com. 
                  </p>
                </div>

                <button className="btn btn-outline-light" type="submit">Submit</button>
              </form>
            </div>

            <div className="col-sm-4 zenith-contact">
              <div className="email">
                <h6><i className="fas fa-envelope envelope-solid"></i>Email Us</h6>
                <p style={{"word-wrap": "break-word"}}>zenithadvisors@greateasternlife.com</p>
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
