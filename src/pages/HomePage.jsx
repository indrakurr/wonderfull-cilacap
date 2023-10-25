import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About"
import History from "../components/History";
import Destination from "../components/Destinations";
import Maps from "../components/Maps";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { useRef } from "react";



function HomePage () {
  const banner = useRef(null);
  const about = useRef(null);
  const history = useRef(null);
  const destination = useRef(null);
  const maps = useRef(null);
  const gallery = useRef(null);

  const scrollToBanner = () => {
    console.log("Scroll to Banner clicked");
    banner.current?.scrollIntoView({ behavior: "smooth" });
  };


  const scrollToAbout = () => {
    console.log("Scroll to About clicked");
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHistory = () => {
    console.log("Scroll to History clicked");
    history.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDestination = () => {
    console.log("Scroll to Destination clicked");
    destination.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMaps = () => {
    console.log("Scroll to Maps clicked");
    maps.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGallery = () => {
    console.log("Scroll to Gallery clicked");
    gallery.current?.scrollIntoView({ behavior: "smooth" });
  };

  

    return (
      <div className="home-page">
        <Header scrollToBanner={scrollToBanner} scrollToAbout={scrollToAbout} scrollToHistory={scrollToHistory} scrollToDestination={scrollToDestination} scrollToMaps={scrollToMaps} scrollToGallery={scrollToGallery}/>
        <Banner ref={banner}/>
        <About ref={about}/>
        <History ref={history}/>
        <Destination ref={destination} />
        <Maps ref={maps}/>
        <Gallery ref={gallery} />
        <Footer />
      </div>
    );
}

export default HomePage;