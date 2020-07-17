import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { TimelineMax, Power1 } from "gsap/all";
import "./ProductModal.css";
import ProductScrollAnimation from "./ProductScrollAnimation";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import { sizeSelectTheme, titleSizeSelectTheme } from "./MuiThemeCreator";

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initial default image
      selectedImage: this.props.item.images[0],
      prevSelectedElementIndex: 0,
      selectedSize: "small",
    };
    this.timeline = new TimelineMax();
    this.updateSelectedImage = this.updateSelectedImage.bind(this);
    this.selectableImages = document.getElementsByClassName("selectable-image");
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  updateSelectedImage(index, image) {
    this.selectableImages[this.state.prevSelectedElementIndex].classList.remove(
      "selected-border"
    );
    this.selectableImages[index].classList.add("selected-border");
    this.setState({ selectedImage: image, prevSelectedElementIndex: index });
  }

  handleSizeChange(event) {
    this.setState({ selectedSize: event.target.value });
  }

  render() {
    const maxSelectableImages = 5;
    return (
      <Modal
        {...this.props}
        aria-labelledby="modal-center"
        centered
        scrollable
        animation={false}
        onShow={() => {
          const modal = document.getElementsByClassName("modal-content")[0];
          this.timeline.fromTo(
            modal,
            1,
            { height: "0%" },
            { height: "97%", ease: Power1.easeInOut }
          );
        }}
      >
        <div className="top-line">
          <span onClick={this.props.onHide} className="close-icon float-right">
            &times;
          </span>
        </div>
        <Modal.Body id="modal-center">
          <div className="container-fluid">
            <div className="row m-auto">
              <div className="col-md-8 p-0">
                <img
                  className="main-image"
                  alt="Error Loading"
                  src={this.state.selectedImage}
                />
              </div>
              <div className="col-md-4 d-flex flex-column p-0 justify-content-start">
                <div className="d-flex flex-column mt-2 mr-3 mb-2 pl-2 align-self-end">
                  <div className="product-name">{this.props.item.name}</div>
                  <div className="align-self-end price">
                    ${this.props.item.price}
                  </div>
                </div>
                {this.props.item.hasOwnProperty("sizes") ? (
                  <div className="ml-auto pl-2 mr-2">
                    <FormControl component="fieldset" focused={false}>
                      <ThemeProvider theme={titleSizeSelectTheme}>
                        <Typography>
                          <FormLabel component="legend">Size:</FormLabel>
                        </Typography>
                      </ThemeProvider>
                      <RadioGroup
                        aria-label="size"
                        name="size"
                        row
                        value={this.state.selectedSize}
                        onChange={this.handleSizeChange}
                      >
                        <ThemeProvider theme={sizeSelectTheme}>
                          <Typography variant="body1">
                            {this.props.item.sizes.map((size) => (
                              <FormControlLabel
                                value={size}
                                key={size}
                                control={<Radio color="default" />}
                                label={size}
                                labelPlacement="start"
                              />
                            ))}
                          </Typography>
                        </ThemeProvider>
                      </RadioGroup>
                    </FormControl>
                  </div>
                ) : null}
                <button
                  type="button"
                  className="btn btn-dark align-self-center btn-lg mt-2 mb-3 w-75"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark align-self-center btn-lg w-75"
                >
                  Add to Cart
                </button>
                <div className="d-flex flex-wrap mt-5 align-self-start ml-3">
                  {this.props.item.images.map((image, index) => {
                    if (index >= maxSelectableImages) {
                      return null;
                    } else {
                      return (
                        <img
                          className={`selectable-image ${
                            index === this.state.prevSelectedElementIndex
                              ? "selected-border"
                              : ""
                          }`}
                          alt="Error Loading"
                          src={image}
                          key={index}
                          onClick={() => this.updateSelectedImage(index, image)}
                        ></img>
                      );
                    }
                  })}
                </div>
                <div className="d-none d-lg-block align-self-center w-75 position-relative pt-4">
                  <ProductScrollAnimation />
                </div>
              </div>
            </div>
            <div className="container row m-0 pt-4 width-70">
              <div className="col">
                <ul>
                  {this.props.item.description.map((point, index) => (
                    <li key={index}>
                      <div className="d-inline-flex">
                        <AcUnitIcon fontSize="small" />
                        <span className="align-self-center smaller-font">
                          {point}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ProductModal;
