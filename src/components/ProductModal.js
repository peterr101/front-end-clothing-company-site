import React from "react";
import { Modal } from "react-bootstrap";
import { TimelineMax, Power1 } from "gsap";
import "./ProductModal.css";

function ProductModal(props) {
  const timeline = new TimelineMax();
  return (
    <Modal
      {...props}
      aria-labelledby="modal-center"
      centered
      scrollable
      animation={false}
      onShow={() => {
        const modal = document.getElementsByClassName("modal-content")[0];
        timeline.fromTo(
          modal,
          1,
          { height: "0%" },
          { height: "97%", ease: Power1.easeInOut }
        );
      }}
    >
      <div className="top-line">
        <span onClick={props.onHide} className="close-icon float-right">
          &times;
        </span>
      </div>
      <Modal.Body id="modal-center">
        <div className="container-fluid">
          <div className="row m-auto">
            <div className="col-md-8 p-0">
              <img className="main-image" alt="Err" src={props.item.image} />
            </div>
            <div className="col-md-4 d-flex flex-column p-0 justify-content-start">
              <div className="d-flex flex-column mt-4 mr-3 mb-3 pl-2 align-self-end">
                <div className="product-name">{props.item.name}</div>
                <div className="align-self-end price">${props.item.price}</div>
              </div>
              <button
                type="button"
                className="btn btn-dark align-self-center btn-lg mt-3 mb-3 w-75"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn btn-outline-dark align-self-center btn-lg w-75"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;
