import React, { Component } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import "./ProductList.css";
import ProductModal from "./ProductModal";
import placeholder from "../images/placeholder.jpg";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      currentItem: { images: [], description: [] },
    };
    this.openProductWindow = this.openProductWindow.bind(this);
  }

  openProductWindow(item) {
    this.setState({ isModalOpen: !this.state.isModalOpen, currentItem: item });
  }

  handleHover(event, item) {
    if (item.images.length > 1) {
      event.target.src = item.images[1];
    }
  }

  render() {
    return (
      <>
        <div id={this.props.id} className="jumbotron m-0 beige">
          <div className="d-flex justify-content-center mb-4">
            <div className="d-inline-block text-uppercase text-center">
              <h2 className="m-0 collection-name">{this.props.name}</h2>
              <h4>{this.props.children}</h4>
            </div>
          </div>
          <div className="row">
            {this.props.products.map((item, i) => {
              return (
                <div
                  className="col-6 col-md-4 small-screen-fix d-flex justify-content-between"
                  key={item.id}
                >
                  <p
                    className="align-self-start mt-3 mt-md-4 pl-1 pl-m-2 pt-1 pb-1 text-lowercase border-name-left product-name-container"
                    key={item.id}
                  >
                    {item.name}
                    <br />
                    <br />
                    {item.price}$
                  </p>
                  <div className="d-flex justify-content-end flex-shrink-1">
                    <ProgressiveImage
                      src={item.images[0]}
                      placeholder=""
                      rootMargin="0% 0% 0%"
                      threshold={[0.5]}
                    >
                      {(src, loading) =>
                        loading ? (
                          <img
                            alt="Err"
                            src={placeholder}
                            className="loading"
                          ></img>
                        ) : (
                          <img
                            className="item"
                            alt="Err"
                            src={src}
                            key={item.id}
                            onClick={() => {
                              this.openProductWindow(item);
                            }}
                            onMouseEnter={(e) => this.handleHover(e, item)}
                            onMouseLeave={(e) =>
                              (e.target.src = item.images[0])
                            }
                          />
                        )
                      }
                    </ProgressiveImage>
                    <div
                      className="vertical"
                      style={{ display: i % 3 === 0 ? "" : "none" }}
                    >
                      <span>Proper </span>
                      <span className="dirty">Dirty</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ProductModal
          show={this.state.isModalOpen}
          onHide={() => this.setState({ isModalOpen: !this.state.isModalOpen })}
          item={this.state.currentItem}
          key={this.state.currentItem.id}
        />
      </>
    );
  }
}

export default ProductList;
