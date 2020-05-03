import React from "react";
import Home from "./components/Home";
import TermsAndConditions from "./components/TermsAndConditions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
