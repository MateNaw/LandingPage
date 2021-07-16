import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
