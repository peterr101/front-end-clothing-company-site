import React from "react";
import Home from "./components/Home";
import TermsAndConditions from "./components/TermsAndConditions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import { VintageWetDreamsProductList } from "./Products/AllCollections";
import { EmotionsProductList } from "./Products/AllCollections";
import Footer from "./components/Footer";
import LargeNav from "./components/LargeNav";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/shop-all"
            render={() => (
              <>
                {window.scrollTo(0, 0)}
                <LargeNav />
                <ProductList
                  name="Shop All Collections"
                  products={[
                    ...VintageWetDreamsProductList,
                    ...EmotionsProductList,
                  ]}
                />
                <Footer />
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
