import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Gallery />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
