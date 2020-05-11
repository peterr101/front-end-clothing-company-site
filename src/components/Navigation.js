import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link className="nav-link" to="/shop-all">
          Shop All
        </Link>
        <a className="nav-link" href="#about">
          A Message from the Creator
        </a>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/terms-and-conditions">
          Terms &amp; Conditions
        </Link>
      </div>
    );
  }
}

export default Navigation;
