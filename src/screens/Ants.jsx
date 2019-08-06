import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Work.css";

class Ants extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3 className="title">Project - Andover Newton Theological School</h3>
          <p>Website built in Drupal-7.</p>

          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/Ants-Home-threeposts.png")}
                alt="ANTS Home Page"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Home Page - Andover Newton Theological School
                </h5>
                <p className="card-text">
                  This home page contains rotating images, request info form,
                  dinamically display news section, upcoming events and rotating
                  faculty block.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">June 2014 - June 2016</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/AntsToggleMenu.png")}
                alt="ANTS Toggle Menu Page"
              />
              <div className="card-body">
                <h5 className="card-title">Toggle Menu </h5>
                <p className="card-text">
                  Toggle mega munu has side navigation and navigation title with
                  image and content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">June 2014 - June 2016</small>
              </div>
            </div>
          </div>

          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/AntsAlumn.png")}
                alt="Alumni Page"
              />
              <div className="card-body">
                <h5 className="card-title">Alumni</h5>
                <p className="card-text">
                  Alumni page contains side by side images and dinamically
                  display of news and other alumni notes blocks. Dynamic news
                  block contains news verbiage and image of related news.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">June 2014 - June 2016</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/AntsEventCalendar.png")}
                alt="Event Calendar Page"
              />
              <div className="card-body">
                <h5 className="card-title">Event Calendar Page</h5>
                <p className="card-text">
                  Event calendar page shows calendar by month and year that
                  displays an event for each day.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">June 2014 - June 2016</small>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Ants;
