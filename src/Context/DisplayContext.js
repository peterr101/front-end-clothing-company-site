import React from "react";
import { createContext, Component } from "react";

export const DisplayContext = createContext();

export class ContextProvider extends Component {
  state = {
    isNavVisible: true,
    navContactLinkActiveness: "",
    navTermsLinkActiveness: "",
  };

  render() {
    return (
      <DisplayContext.Provider
        value={{
          state: this.state,
          hideNav: () =>
            this.setState({ isNavVisible: !this.state.isNavVisible }),
          // required to set initially to active before scroll
          setNavContactLinkActiveness: (cssClass) =>
            this.setState({ navContactLinkActiveness: cssClass }),
          setNavTermsLinkActiveness: (cssClass) =>
            this.setState({ navTermsLinkActiveness: cssClass }),
        }}
      >
        {this.props.children}
      </DisplayContext.Provider>
    );
  }
}
