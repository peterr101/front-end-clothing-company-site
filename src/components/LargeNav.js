import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { DisplayContext } from "../Context/DisplayContext";

class LargeNav extends Component {
  static contextType = DisplayContext;
  constructor(props) {
    super(props);
    this.state = {
      pos: "fixed-top",
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      pos: window.innerWidth < 768 ? "fixed-top" : "sticky-top",
    });
  }

  render() {
    const navContext = this.context;
    return (
      <nav
        id="largeNav"
        className={`navbar bg-dark navbar-dark navbar-expand-xl ${this.state.pos}`}
      >
        <a className="navbar-brand" href="/#proper-dirty">
          <img alt="PD" src={logo} className="rounded align-top"></img>
          Proper Dirty
        </a>

        {/* collapsable nav */}
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white font-weight-bold"
                href="/#vintageWetDreams"
                data-target="#vintageWetDreams"
              >
                Vintage Wet Dreams
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white font-weight-bold"
                href="/#emotions"
                data-target="#emotions"
              >
                Emotions
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white font-weight-bold"
                to="/shop-all"
                data-target="#shop-all"
              >
                Shop All
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white font-weight-bold"
                href="/#about"
                data-target="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white font-weight-bold ${navContext.state.navContactLinkActiveness}`}
                to="/contact"
                data-target="#contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-white font-weight-bold ${navContext.state.navTermsLinkActiveness}`}
                to="/terms-and-conditions"
                data-target="#terms"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default LargeNav;
