import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
