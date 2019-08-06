import React, { Component } from "react";
import "./Footer.css";
import ContactMe from "../components/Social.jsx";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="clearfix">
          <div className="container-fluid">
            <div className="footer-text">
              <span className="text-muted">
                My portfolio &#169; {new Date().getFullYear()}
              </span>
            </div>

            <ContactMe />
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
