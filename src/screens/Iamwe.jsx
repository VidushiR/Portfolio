import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Work.css";

class Iamwe extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3>Project - I Am We</h3>
          <p>
            The "I Am We" organization's website has changed after I developed
            it during 2013 - 2014. I managed to get a screenshot of home page of
            the previous website that I had built. Below is the screenshot of
            that home page.
          </p>

          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/iamwe-front.png")}
                alt="IAmWe Home Page"
              />
              <div className="card-body">
                <h5 className="card-title">Home Page - I Am We</h5>
                <p className="card-text">
                  Home Page Features: Toggle menu and Rotating images{" "}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Oct 2013 – June 2014</small>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Iamwe;
