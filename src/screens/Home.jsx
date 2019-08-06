import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./Home.css";
import WorkSample from "../components/WorkSample.jsx";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron subtitle="Welcome to my portfolio!" />
        <div className="container">
          <h4>Vidushi Raval - Web Developer</h4>
          <p>
            My name is Vidushi Raval and I am a creative web developer. I love
            to implement responsive web solutions and I also stand for quality.
          </p>
          <p>
            I like to work in a team environment. As the saying goes: 'two heads
            are better than one'! It's helpful and valuable to have an advice or
            second opinion.
          </p>

          <div className="workSample">
            <h4>Work Samples</h4>
            <p>Below you will find the projects that I worked on.</p>

            <WorkSample />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
