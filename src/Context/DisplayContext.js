import React from "react";
import { createContext, Component } from "react";

export const DisplayContext = createContext();

export class ContextProvider extends Component {
  state = {
    isNavVisible: true,
  };

  render() {
    return (
      <DisplayContext.Provider
        value={{
          state: this.state,
          hideNav: () =>
            this.setState({ isNavVisible: !this.state.isNavVisible }),
        }}
      >
        {this.props.children}
      </DisplayContext.Provider>
    );
  }
}
