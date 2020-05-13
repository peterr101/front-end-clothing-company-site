import React, { Component } from "react";
import Footer from "./Footer";
import LargeNav from "./LargeNav";
import "./Contact.css";
import MessageForm from "./MessageForm";
import { TimelineMax } from "gsap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ismobile: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.scrollTo(0, 0);
    const timeline = new TimelineMax();
    const phone = document.getElementById("phone");
    const mail = document.getElementById("mail");
    timeline
      .fromTo(phone, 1.5, { x: -40 }, { x: 0 })
      .fromTo(mail, 1.5, { x: 40 }, { x: 0 }, "-=1.5");
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({
      ismobile: window.innerWidth < 768,
    });
  }
  render() {
    return this.state.ismobile ? (
      <>
        <LargeNav />
        <div className="container d-flex flex-column align-items-center offset-nav pb-5">
          <h2 className="font-weight-bold pb-2">Contact</h2>
          <div>
            <i className="fa fa-phone-square pt-1" aria-hidden="true"></i>
            <span className="contact-info"> (778)389-6267</span>
          </div>
          <div>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span className="contact-info"> shop@properdirty.com</span>
          </div>
        </div>
        <div className="col-12 pb-5">
          <MessageForm InputProps={{ style: { fontSize: "2rem" } }} />
        </div>
        <Footer />
      </>
    ) : (
      <>
        <LargeNav />
        <div className="container-fluid full-height">
          <div className="row no-gutters align-content-center h-100">
            <div className="col-md-6 border-right h-100">
              <div className="d-flex flex-column align-items-center h-100 justify-content-center">
                <h2 className="font-weight-bold pb-4">Contact</h2>
                <div className="d-flex flex-wrap">
                  <div id="phone" className="pr-4">
                    <i
                      className="fa fa-phone-square pt-1"
                      aria-hidden="true"
                    ></i>
                    <span className="contact-info">(778)389-6267</span>
                  </div>
                  <div id="mail">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span className="contact-info"> shop@properdirty.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              {/* form built with formik */}
              <MessageForm />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Contact;
