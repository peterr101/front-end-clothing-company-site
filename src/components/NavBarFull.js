import React from "react";
import "./NavBarFull.css";
import logo from "../images/logo.png";

function NavBarFull() {
  return (
    <nav
      id="largeNav"
      className="navbar sticky-top bg-dark navbar-dark navbar-expand"
    >
      <a className="navbar-brand" href="#initialImage">
        <img alt="PD" src={logo} className="rounded align-top"></img>
        Proper Dirty
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link text-white font-weight-bold" href="#">
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
          <a className="nav-link text-white font-weight-bold" href="#emotions">
            Emotions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white font-weight-bold" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white font-weight-bold" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarFull;
