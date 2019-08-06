import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Work.css";
import WorkSample from "../components/WorkSample.jsx";

class Work extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <h3>Work Samples</h3>
          <p>Below you will find the projects which I worked with.</p>
        </div>
        <WorkSample />

        <Footer />
      </div>
    );
  }
}
export default Work;
