import React, { Component } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

class ContactMe extends Component {
  render() {
    return (
      <div className="container">
        <div className="social-icons">
          <div className="row-social">
            <div className="mail-contact">
              <Link
                to="mailto:joshividushi4@gmail.com"
                className="mail-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mail-img-top"
                  src={require("../images/gmail-icon.svg")}
                  alt="email"
                />
              </Link>
            </div>
            <div className="linkedin-contact">
              <br />
              {/* Linkedin */}
              <Link
                to="https://www.linkedin.com/in/vidushi-raval-joshi-a69a0416/"
                className="mail-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedIn-img-top"
                  src={require("../images/linkedin.svg")}
                  alt="linkedin"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactMe;
