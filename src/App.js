import React, { Fragment } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Banner />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
