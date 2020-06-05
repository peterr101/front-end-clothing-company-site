import React from "react";
import "./SlideShow.css";
import image1 from "../images/D-CHOICE-2.jpg";
import image2 from "../images/D-CHOICE-6.jpg";
import image3 from "../images/D-CHOICE-15.jpg";
import image4 from "../images/D-CHOICE-19.jpg";

function SlideShow(props) {
  return (
    <div className="modalView" onClick={props.toggle}>
      <div
        id="vintageSlideShow"
        className="carousel slide"
        data-ride="carousel"
        onClick={(e) => e.stopPropagation()}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#vintageSlideShow"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#vintageSlideShow" data-slide-to="1"></li>
          <li data-target="#vintageSlideShow" data-slide-to="2"></li>
          <li data-target="#vintageSlideShow" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block img-responsive"
              src={image1}
              alt="First"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="carousel-item ">
            <img className="d-block img-responsive" src={image2} alt="Second" />
          </div>
          <div className="carousel-item ">
            <img className="d-block img-responsive" src={image3} alt="Third" />
          </div>
          <div className="carousel-item ">
            <img className="d-block img-responsive" src={image4} alt="Fourth" />
          </div>
        </div>
      </div>
      <div className="closer" onClick={props.toggle}>
        close
      </div>
    </div>
  );
}

export default SlideShow;
