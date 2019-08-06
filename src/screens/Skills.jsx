import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Chart from "../components/Chart.jsx";
import MySkills from "../components/TechSkills.jsx";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    //Ajax calls here
    this.setState({
      chartData: {
        labels: ["HTML", "CSS", "React JS", "Javascript", "SQL", "Drupal"],
        datasets: [
          {
            labels: ["Expert", "Advanced", "Intermediate", "Beginner"],
            data: [90, 90, 40, 40, 60, 80, 40, 30, 20, 10, 0, 100],
            displays: ["Expert", "Advanced", "Intermediate", "Beginner"],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 235, 0.6)",
              "rgba(255, 159, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="skills">
        <Navbar />
        <h3 className="skill-title">My Skills</h3>
        <MySkills />

        <div className="container">
          <Chart
            chartData={this.state.chartData}
            lavel="HTML"
            LegendPosition="bottom"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Skills;
