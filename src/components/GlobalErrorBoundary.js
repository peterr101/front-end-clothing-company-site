import React, { Component } from "react";
import "./GlobalErrorBoundary.css";

class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error-background">
          <h5 className="error-msg">
            Something went wrong. Return to <a href="/">Proper Dirty</a>.
          </h5>
        </div>
      );
    }
    return this.props.children;
  }
}

export default GlobalErrorBoundary;
