import React, { Component } from "react";
import SlideShow from "./SlideShow";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { slidesVisible: false };
  }

  toggleSlideVisibility = () => {
    const largeNav = document.getElementById("largeNav");
    if (largeNav.style.display === "none") {
      largeNav.style.display = "flex";
    } else {
      largeNav.style.display = "none";
    }
    console.log(largeNav.style.display);
    this.setState({ slidesVisible: !this.state.slidesVisible });
  };

  render() {
    return (
      <div
        id="gallery"
        className="container-fluid d-flex justify-content-center"
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
