import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class WorkSample extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card-deck">
            <div className="card">
              <NavLink className="nav-link" to="/msce" activeClassName="active">
                <img
                  className="card-img-top"
                  src={require("../images/MSCEHome.png")}
                  alt="MSCE Home Page"
                />
              </NavLink>
              <div className="card-body">
                <Link to="/msce" className="mail-link">
                  <h4 className="card-title">Modern Supply Chain Experience</h4>
                </Link>

                <h6>Employer: Ellen Michaels Presents, San Fransisco CA </h6>
                <h6>Client: Oracle</h6>
                <h6>Environment: Drupal-7, Bootstrap</h6>
                <p className="card-text">
                  Developed a website for Oracle client for their three days
                  conference about modernizing supply chain that featured
                  thought-provoking speakers, solution demonstrations and
                  networking opportunities.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
            <div className="card">
              <NavLink className="nav-link" to="/odc" activeClassName="active">
                <img
                  className="card-img-top"
                  src={require("../images/ODCHome.png")}
                  alt="ODC Home Page"
                />
              </NavLink>
              <div className="card-body">
                <Link to="/odc" className="mail-link">
                  <h4 className="card-title">Oracle Data Cloud Summit</h4>
                </Link>
                <h6>Employer: Ellen Michaels Presents, San Fransisco CA</h6>
                <h6>Client: Oracle</h6>
                <h6>Environment: Drupal-7, Bootstrap</h6>
                <p className="card-text">
                  Developed Oracle Data Cloud Summit website which was a unique
                  event that brought brightest minds together with the most engaging
                  stories to let the people feel the pulse of the new possibilities.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">July 2016 - June 2017</small>
              </div>
            </div>
            <div className="card">
              <NavLink className="nav-link" to="/ants" activeClassName="active">
                <img
                  className="card-img-top"
                  src={require("../images/ANTSHome.png")}
                  alt="ANTS Home Page"
                />
              </NavLink>
              <div className="card-body">
                <Link to="/ants" className="mail-link">
                  <h4 className="card-title">
                    Andover Newton Theological School
                  </h4>
                </Link>
                <h6>
                  Employer: Hellenic College Holy Cross/Andover Newton
                  Theological School, Boston MA
                </h6>
                <h6>Environment: Drupal-7, Bootstrap</h6>
                <p className="card-text">
                  Developed a website for Andover Newton Theological School
                  which is the nation's oldest theological school and its first
                  graduate institution of any kind.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">June 2014 - June 2016</small>
              </div>
            </div>

            <div className="card">
              <NavLink className="nav-link" to="iamwe">
                <img
                  className="card-img-top"
                  src={require("../images/iamwe-front.png")}
                  alt="IAmWe Home Page"
                />
              </NavLink>
              <div className="card-body">
                <Link to="/iamwe" className="mail-link">
                  <h4 className="card-title">I Am We</h4>
                </Link>
                <h6>Employer: I Am We, Chicago IL</h6>
                <h6>Environment: WordPress</h6>

                <p className="card-text">
                  Developed a website for non-profit organization called
                  'I Am We' whose mission is to create cohesion in Chicago’s most
                  underinvested neighborhoods by building bridges between youth
                  and community.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Oct 2013 – June 2014</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WorkSample;
