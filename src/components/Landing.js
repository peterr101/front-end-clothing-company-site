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
      document.getElementById("titles").appendChild(proper);
    }, 500);
    setTimeout(() => {
      const dirty = document.createElement("H1");
      dirty.innerHTML = "Dirty.";
      dirty.classList.add("second");
      document.getElementById("titles").appendChild(dirty);
    }, 1400);
  }

  render() {
    return (
      <div className="container-fluid">
        <div id="initialImage">
          <div className="d-fixed d-md-none">
            <nav className="navbar bg-dark navbar-dark fixed-top">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleContent"
                aria-controls="navbarToggleContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarToggleContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white font-weight-bold"
                      href="#vintageWetDreams"
                    >
                      Shop Vintage Wet Dreams
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white font-weight-bold"
                      href="#emotions"
                    >
                      Shop Emotions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white font-weight-bold"
                      href="#about"
                    >
                      A Message from the Creator
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-white font-weight-bold"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Navigation />
          <div id="titles" className="clearfix greeting"></div>
          <ScrollAnimation />
        </div>
      </div>
    );
  }
}

export default Landing;
