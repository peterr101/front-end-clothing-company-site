import React from "react";
import "./NavBarFull.css";
import { DisplayContext } from "../Context/DisplayContext";
import LargeNav from "./LargeNav";

function NavBarFull() {
  return (
    <DisplayContext.Consumer>
      {(context) => (context.state.isNavVisible ? <LargeNav /> : null)}
    </DisplayContext.Consumer>
  );
}

export default NavBarFull;
