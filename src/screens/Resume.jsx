import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "./Resume.css";
import WorkExperience from "../components/WorkExperience.jsx";
import MySkills from "../components/TechSkills.jsx";

class Resume extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div id="resume-body">
            <section
              className="resume-section p-3 p-lg-5 d-flex d-column"
              id="about"
            >
              <div className="my-auto">
                <h1 className="mb-0 name">Vidushi Raval</h1>
                <div className="subheading mb-5 about">
                  Fremont, CA ·
                  <Link to="mailto:name@email.com">
                    joshividushi4@gmail.com{" "}
                  </Link>
                </div>

                {/* Work Experience */}
                <WorkExperience />

                {/* My Skills  */}

                <div className="my-auto">
                  <h3 className="mb-5">Technical Skills</h3>

                  <section
                    className="resume-section p-3 p-lg-5 d-flex flex-column"
                    id="skills"
                  >
                    <MySkills />
                  </section>
                </div>

                {/* Education  */}
                <section
                  className="resume-section p-3 p-lg-5 d-flex flex-column"
                  id="education"
                >
                  <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    {/* Education One */}
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                      <div className="resume-content mr-auto">
                        <h4 className="mb-0">
                          Southern New Hampshire University, Manchester, NH
                        </h4>
                        <div className="subheading mb-3">
                          MS in Information Technology
                        </div>
                        <div>Recipient of graduate scholarship award</div>
                        <p>GPA: 3.80</p>
                      </div>
                      <div className="resume-date text-md-right">
                        <span className="text-primary">2013</span>
                      </div>
                    </div>
                    {/* Education Two */}
                    <div className="resume-item d-flex flex-column flex-md-row">
                      <div className="resume-content mr-auto">
                        <h4 className="mb-0">
                          University of Massachusetts, Boston, MA
                        </h4>
                        <div className="subheading mb-3">
                          Completed coursework towards Non-degree MS in Computer
                          Science
                        </div>
                        <div>
                          Courses: User Interface and Design, Database
                          Management System
                        </div>
                        <p>GPA 3.65 </p>
                      </div>
                      <div className="resume-date text-md-right">
                        <span className="text-primary">2010</span>
                      </div>
                    </div>
                    {/* Education Three */}
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                      <div className="resume-content mr-auto">
                        <h4 className="mb-0">
                          Atmiya Institute of Technology and Science, Gujarat,
                          INDIA
                        </h4>
                        <div className="subheading mb-3">
                          BE in Information Technology
                        </div>
                        <div>Recipient of graduate scholarship award</div>
                        <p>GPA: 3.80</p>
                      </div>
                      <div className="resume-date text-md-right">
                        <span className="text-primary year">2004 – 2008</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Resume;
