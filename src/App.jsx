import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home.jsx";
import Resume from "./screens/Resume.jsx";
import Work from "./screens/Work.jsx";
import Msce from "./screens/Msce.jsx";
import Odc from "./screens/Odc.jsx";
import Ants from "./screens/Ants.jsx";
import Iamwe from "./screens/Iamwe.jsx";
import Skills from "./screens/Skills.jsx";
import Contact from "./screens/Contact.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/msce" component={Msce} />
          <Route exact path="/odc" component={Odc} />
          <Route exact path="/ants" component={Ants} />
          <Route exact path="/iamwe" component={Iamwe} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
