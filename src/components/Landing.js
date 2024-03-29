import React, { Component } from "react";
import "./Landing.css";
import ScrollAnimation from "./ScrollAnimation";
import Navigation from "./Navigation";

class Landing extends Component {
  componentDidMount() {
    setTimeout(() => {
      const proper = document.createElement("H1");
      proper.innerHTML = "Proper.";
      proper.classList.add("first");
      const title = document.getElementById("titles");
      // ensure title element is present incase of quick page switch
      title && title.appendChild(proper);
    }, 500);
    setTimeout(() => {
      const dirty = document.createElement("H1");
      dirty.innerHTML = "Dirty.";
      dirty.classList.add("second");
      const title = document.getElementById("titles");
      title && title.appendChild(dirty);
    }, 1400);
  }

  render() {
    return (
      <div className="container-fluid">
        <div id="proper-dirty">
          <Navigation />
          <div id="titles" className="clearfix greeting"></div>
          <ScrollAnimation />
        </div>
      </div>
    );
  }
}

export default Landing;
