import React, { Component } from "react";
import { Link } from "react-router-dom";

class WorkExperience extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="experience"
      >
        <div className="my-auto">
          <h3 className="mb-5">Work Experience</h3>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <div id="accordion" role="tablist" aria-multiselectable="true">
                {/* Experience one */}

                <div className="card">
                  <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                      <Link
                        data-toggle="collapse"
                        data-parent="#accordion"
                        to="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <h5 className="mb-0">Web Developer</h5>
                        <div className="subheading mb-3">
                          Ellen Michaels Presents, San Francisco CA
                          {/* <span className="text-primary">
                            Jan 2016 - June2016
                          </span> */}
                        </div>
                        <div className="text-primary">Jan 2016 - June2016</div>
                      </Link>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="card-block">
                      <ul className="fa-ul mb-0">
                        <li>
                          Developed maintainable, scalable, and responsive event
                          registration websites in Drupal 7
                        </li>
                        <li>
                          Determined client’s need, gathered requirements,
                          communicated with client throughout the development
                          process to manage their expectations, resolve issues,
                          and provide project status
                        </li>
                        <li>
                          Implemented look and feel for forms and web pages in
                          Certain and eTouches registration softwares
                        </li>
                        <li>Performed releases to live production sites</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Two */}

              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <h5 className="mb-0">
                    <Link
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      to="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h5 className="mb-0">Web Developer</h5>
                      <div className="subheading mb-3">
                        Andover Newton Theological School, Newton MA
                      </div>
                      <div className="text-primary">Jan 2016 - June2016</div>

                      <div className="subheading mb-3">
                        Hellenic College Holy Cross, Brookline MA
                      </div>
                      <div className="text-primary">Jan 2016 - June2016</div>
                    </Link>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="resume-item d-flex flex-column flex-md-row">
                    <div className="resume-content mr-auto">
                      <ul className="fa-ul mb-0">
                        <li>
                          Constructed a powerful and modern architecture
                          including including content types, fields and entities
                        </li>
                        <li>
                          Adhered to Drupal best practices to create fully
                          functional, cross browser compatible and mobile
                          friendly website on Acquia cloud
                        </li>
                        <li>
                          Incorporated popular Drupal modules such as Panels,
                          Views, ctools, CKEditor, Taxonomy, MegaMenu, Rules and
                          others in a custom theme
                        </li>
                        <li>
                          Applied updates to Drupal modules on Acquia cloud
                          using Git
                        </li>
                        <li>
                          Managed tasks and collaborated with team using Debugle
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience three */}

              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <h5 className="mb-0">
                    <Link
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      to="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h5 className="mb-0">Web Developer Intern</h5>
                      <div className="subheading mb-3">
                        I Am We, Chicago [remote]
                      </div>
                      <div className="text-primary">Oct 2013 – June 2014</div>
                    </Link>
                  </h5>
                </div>

                <div
                  id="collapseThree"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="card-block">
                    <ul className="fa-ul mb-0">
                      <li>
                        Redesigned and developed organization’s website using
                        HTML/CSS/JavaScript in WordPress
                      </li>
                      <li>
                        Took technical leadership in managing design and
                        structure of the website
                      </li>
                      <li>
                        Volunteer of Excellence Award for web development work
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience Four */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkExperience;
