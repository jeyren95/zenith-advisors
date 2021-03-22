import React from "react";

import Heading from "../heading/Heading";

import "./About.css";

class About extends React.Component {

    render() {
        return (
            <div className="about">
                <Heading title="Who We are" />
                <p>Zenith Advisors is a group of financial adviser representatives representing Great Eastern Assurance Company Limited.</p>
            </div>
        )
    }

}

export default About