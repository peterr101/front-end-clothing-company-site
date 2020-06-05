import React, { Component } from "react";
import SlideShow from "./SlideShow";
import "./Gallery.css";
import { DisplayContext } from "../Context/DisplayContext";

class Gallery extends Component {
  static contextType = DisplayContext;
  constructor(props) {
    super(props);
    this.state = { slidesVisible: false };
    const userAgentString = navigator.userAgent;
    const chromeAgent = userAgentString.indexOf("Chrome") > -1;
    this.safariAgent = userAgentString.indexOf("Safari") > -1;

    // Discard Safari since it also matches Chrome
    if (chromeAgent && this.safariAgent) this.safariAgent = false;
  }

  toggleSlideVisibility = () => {
    const dcontext = this.context;
    dcontext.hideNav();
    this.setState({ slidesVisible: !this.state.slidesVisible });
  };

  render() {
    return (
      <div
        id="gallery"
        className={`container-fluid d-flex justify-content-center ${
          this.safariAgent ? "safari-override" : ""
        }`}
      >
        <button
          type="button"
          className="btn btn-outline-light align-self-center"
          onClick={this.toggleSlideVisibility}
        >
          View Gallery
        </button>
        {this.state.slidesVisible ? (
          <SlideShow toggle={this.toggleSlideVisibility} />
        ) : null}
      </div>
    );
  }
}

export default Gallery;
