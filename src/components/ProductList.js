import React, { Component } from "react";
import "./ProductList.css";

class ProductList extends Component {
  render() {
    return (
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
              <div className="col-6 col-md-4" key={item.id}>
                <div className="d-flex justify-content-between">
                  <p
                    className="align-self-start mt-4 pl-2 pt-1 pb-1 text-lowercase border-name-left"
                    key={item.id}
                  >
                    {item.name}
                    <br />
                    <br />
                    {item.price}$
                  </p>
                  <div className="d-flex justify-content-end">
                    <img
                      className="item position-relative"
                      alt="Err"
                      src={item.image}
                      key={item.id}
                    />
                    <div
                      className="vertical"
                      style={{ display: i % 3 === 0 ? "" : "none" }}
                    >
                      <span>Proper </span>
                      <span className="dirty">Dirty</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
