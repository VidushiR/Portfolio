import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Work.css";

class Msce extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3>Project - Modern Supply Chain Experience</h3>
          <p>
            Website built in Drupal-7. Below are few screenshots of several
            pages.
          </p>

          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/MSCEHome.png")}
                alt="MSCE Home Page"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Home Page - Modern Supply Chain Experience
                </h5>
                <p className="card-text">
                  Home page contains rotating images, video , leading speakers
                  and solution areas with sticky header.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/KeynoteSpeakers.png")}
                alt="Keynote Speakers Page"
              />
              <div className="card-body">
                <h5 className="card-title">Keynote Spekaers Page</h5>
                <p className="card-text">
                  Keynote speakers page has several speakers pictures, their
                  information and pop up functionality.{" "}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
          </div>

          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/agenda.png")}
                alt="Agenda Page"
              />
              <div className="card-body">
                <h5 className="card-title">Agenda</h5>
                <p className="card-text">
                  This page contains information about all the agendas and
                  sessions with date and timing.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/manufacturing.png")}
                alt="ODC Home Page"
              />
              <div className="card-body">
                <h5 className="card-title">Manufacturing Page</h5>
                <p className="card-text">
                  This page has easy to navigate solution navigation bar that
                  goes to various solution areas. Also, Manufacturing page has
                  general sessions, track sessions, track descriptions, and
                  secial programs. This page has rotating section that contains
                  solution area's speakers brief bio, picture and details.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Msce;
