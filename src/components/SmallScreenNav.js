import React from "react";
import "./SmallScreenNav.css";
import { Link } from "react-router-dom";

function SmallScreenNav() {
  return (
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
        <div className="collapse navbar-collapse" id="navbarToggleContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-white font-weight-bold"
                href="/#vintageWetDreams"
              >
                Shop Vintage Wet Dreams
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white font-weight-bold"
                href="/#emotions"
              >
                Shop Emotions
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white font-weight-bold"
                href="/#about"
              >
                A Message from the Creator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white font-weight-bold" href="/#">
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
        </div>
      </nav>
    </div>
  );
}

export default SmallScreenNav;
