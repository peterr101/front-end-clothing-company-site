import React from "react";
import Landing from "./components/Landing";
import NavBarFull from "./components/NavBarFull";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Gallery from "./components/Gallery";
import { VintageWetDreamsProductList } from "./Products/AllCollections";
import { EmotionsProductList } from "./Products/AllCollections";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <NavBarFull />
        <About />
        <ProductList
          name="Vintage Wet Dreams"
          id="vintageWetDreams"
          products={VintageWetDreamsProductList}
        >
          The Newest Collection
        </ProductList>
        <Gallery />
        <ProductList
          name="Emotions"
          id="emotions"
          products={EmotionsProductList}
        ></ProductList>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
