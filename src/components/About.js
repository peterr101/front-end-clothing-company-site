import React from "react";
import photoOne from "../images/D-CHOICE-2.jpg";
import photoTwo from "../images/D-CHOICE-6.jpg";
import photoThree from "../images/D-CHOICE-15.jpg";
import photoFour from "../images/D-CHOICE-19.jpg";
import "./About.css";

function About() {
  return (
    <div id="about" className="jumbotron m-0">
      <div className="row">
        <div className="d-none d-md-flex col-md-5">
          <img alt="Err" src={photoOne} className="img-fluid modifier"></img>
        </div>

        <div className="col-md-7 justify-content-center">
          <h1>A Message from the Creator</h1>
          <p>
            Lorem Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          </p>
          <div className="d-flex justify-content-center">
            <img
              alt="Err"
              src={photoFour}
              className="img-fluid d-inline-block"
            ></img>
            <img
              alt="Err"
              src={photoTwo}
              className="img-fluid d-inline-block"
            ></img>
            <img
              alt="Err"
              src={photoThree}
              className="img-fluid d-inline-block"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
