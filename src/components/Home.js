import React from "react";
import Landing from "./Landing";
import NavBarFull from "./NavBarFull";
import About from "./About";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Gallery from "./Gallery";
import { VintageWetDreamsProductList } from "../Products/AllCollections";
import { EmotionsProductList } from "../Products/AllCollections";
import { ContextProvider } from "../Context/DisplayContext";

function Home() {
  return (
    <ContextProvider>
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
    </ContextProvider>
  );
}

export default Home;
