import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

class Navigation extends Component {
  render() {
    return (
      <div id="sidebar" className="d-none d-md-flex flex-column">
        <Link
          className="nav-link"
          to={{ pathname: "/", hash: "#vintageWetDreams" }}
        >
          Shop Collection One
        </Link>
        <Link className="nav-link" to={{ pathname: "/", hash: "#emotions" }}>
          Shop Emotions
        </Link>
        <Link className="nav-link" to="/shop-all">
          Shop All
        </Link>
        <Link className="nav-link" to={{ pathname: "/", hash: "#about" }}>
          A Message from the Creator
        </Link>
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
