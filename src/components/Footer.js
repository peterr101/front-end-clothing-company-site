import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="position-relative">
      <div className="container-fluid area">
        <p className="text-center font-italic m-2 pb-2 font-weight-bold">
          stay connected
        </p>
        <div className="d-flex justify-content-center pb-4">
          <a href="https://www.facebook.com/properdirty/">
            <i className="fa fa-facebook-f fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/properdirty/">
            <i className="fa fa-instagram fa-2x"></i>
          </a>
        </div>
        <p className="p-2 copyright">&copy; Proper Dirty, 2020.</p>
      </div>
    </footer>
  );
}

export default Footer;
