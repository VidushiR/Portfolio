import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactMe from "../components/Social.jsx";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="contact-page" id="contact-page">
        <Navbar />

        <div className="container">
          <h3>Contact Me </h3>
          <div className="container-fluid contact-social-icons">
            <ContactMe />
          </div>

          {/* Text */}
          <div className="container-fluid social-text">
            <div className="contact-one">
              <Link
                to="mailto:joshividushi4@gmail.com"
                className="mail-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mail-text">Click here to send me an email</div>
              </Link>
            </div>
            <div className="contact-two">
              <br />
              {/* Linkedin */}

              <Link
                to="https://www.linkedin.com/in/vidushi-raval-joshi-a69a0416/"
                className="mail-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mail-text">
                  Click here to contact me on LinkedIn
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Contact;
