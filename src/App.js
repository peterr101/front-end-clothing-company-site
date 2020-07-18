import React from "react";
import Home from "./components/Home";
import TermsAndConditions from "./components/TermsAndConditions";
import { HashRouter, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import { VintageWetDreamsProductList } from "./Products/AllCollections";
import { EmotionsProductList } from "./Products/AllCollections";
import Footer from "./components/Footer";
import LargeNav from "./components/LargeNav";
import GlobalErrorBoundary from "./components/GlobalErrorBoundary";
import { ContextProvider } from "./Context/DisplayContext";
class App extends React.Component {
  render() {
    return (
      <GlobalErrorBoundary>
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Home} />
            <ContextProvider>
              <Route
                path="/terms-and-conditions"
                component={TermsAndConditions}
              />
              <Route path="/contact" component={Contact} />
              <Route
                exact
                path="/shop-all"
                render={() => (
                  <>
                    {window.scrollTo(0, 0)}
                    <span id="shop-all">
                      <LargeNav />
                      <ProductList
                        name="Shop All Collections"
                        products={[
                          ...VintageWetDreamsProductList,
                          ...EmotionsProductList,
                        ]}
                      />
                      <Footer />
                    </span>
                  </>
                )}
              />
            </ContextProvider>
          </Switch>
        </HashRouter>
      </GlobalErrorBoundary>
    );
  }
}

export default App;
