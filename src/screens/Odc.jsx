import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Work.css";

class Odc extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3>Project - Oracel Data Cloud Summit</h3>
          <p>
            Developed website in Drupal-7. Here are some sample pages from
            Oracle Data Cloud Summit website.
          </p>

          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/ODCHome.png")}
                alt="ODC Home Page"
              />

              <div className="card-body">
                <h5 className="card-title">
                  Home Page - Oracel Data Cloud Summit
                </h5>
                <p className="card-text">
                  Home page has sticky header and video features.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/odc-speakers.png")}
                alt="ODCSpeakers Page"
              />
              <div className="card-body">
                <h5 className="card-title"> Speakers Page</h5>
                <p className="card-text">
                  This page has multiple speakers which has pop up speaker
                  content.
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
                src={require("../images/Venue.png")}
                alt="Venue Page"
              />
              <div className="card-body">
                <h5 className="card-title">Venue Page</h5>
                <p className="card-text">
                  Venue page has picture and text content side by side feature.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../images/ODC-agenda.png")}
                alt="ODC Partners Page"
              />
              <div className="card-body">
                <h5 className="card-title">ODC Agenda Page</h5>
                <p className="card-text">
                  This page displays agenda for the event with time schedule.
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
export default Odc;
