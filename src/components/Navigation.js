import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div id="sidebar" className="d-none d-md-flex flex-column">
        <a className="nav-link" href="#vintageWetDreams">
          Shop Vintage Wet Dreams
        </a>
        <a className="nav-link" href="#emotions">
          Shop Emotions
        </a>
        <a className="nav-link" href="#about">
          A Message from the Creator
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
      </div>
    );
  }
}

export default Navigation;
