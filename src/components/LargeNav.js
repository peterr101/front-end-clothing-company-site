import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function LargeNav() {
  return (
    <nav
      id="largeNav"
      className="navbar sticky-top bg-dark navbar-dark navbar-expand-md"
    >
      <a className="navbar-brand" href="/#proper-dirty">
        <img alt="PD" src={logo} className="rounded align-top"></img>
        Proper Dirty
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link text-white font-weight-bold"
            href="/#proper-dirty"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-white font-weight-bold"
            href="#vintageWetDreams"
          >
            Vintage Wet Dreams
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white font-weight-bold" href="/#emotions">
            Emotions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white font-weight-bold" href="/#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white font-weight-bold" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white font-weight-bold"
            to="/terms-and-conditions"
          >
            Terms &amp; Conditions
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LargeNav;
