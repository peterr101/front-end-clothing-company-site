import React from "react";
import LargeNav from "./LargeNav";
import Footer from "./Footer";
import "./TermsAndConditions.css";
import SmallScreenNav from "./SmallScreenNav";

function TermsAndConditions() {
  return (
    <React.Fragment>
      <LargeNav />
      <SmallScreenNav />
      <div className="jumbotron wrapper m-0">
        <h1 className="text-center text-capitalize text-space pt-4">
          Terms <span className="amp">&amp;</span> Conditions
        </h1>
        <div className="heading-underline"></div>
        <div className="container pt-5">
          <h4 className="font-weight-bold">Exchanges and Refunds</h4>
          <p className="pl-2">
            Exchanges and refunds will be given up to 15 days from when the
            product was received. Please make sure that you have carefully
            reviewed your order before finalizing your purchase. <br />
            For more help please contact shop@properdirty.com
          </p>
          <hr className="my-5" />
          <h4 className="font-weight-bold">Returns</h4>
          <p className="pl-2">
            Returns must be sent back within 15 days and in perfect, unworn,
            original condition. Tags must not be broken. We can't refund your
            purchase or return shipping costs unless the product is faulty or
            incorrect.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default TermsAndConditions;
