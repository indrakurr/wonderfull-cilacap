import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About"
import History from "../components/History";
import Destination from "../components/Destinations";
import Maps from "../components/Maps";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";



function HomePage () {
    return (
      <div className="home-page">
          <Header />
          <Banner />
          <About />
          <History />
          <Destination />
          <Maps />
          <Gallery />
          <Footer />
      </div>
    );
}

export default HomePage;