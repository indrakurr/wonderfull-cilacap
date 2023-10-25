import React from "react";
import Header from "../components/Header";
import detailImage from "../assets/destination.jpg";
import Footer from "../components/Footer";

function DetailDestination() {
  return (
    <>
      <Header />
      <div className="container-detail col-xl-12 col-lg-12 col-sm-12">
        <h2>Detail Destination 1</h2>
        <div className="img-container">
          <img src={detailImage} alt="..." />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit
          at sem pellentesque mollis. Pellentesque ultricies eros eu tellus
          semper, ut pretium justo lobortis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut placerat quis magna accumsan sodales.
          Maecenas et tincidunt purus, nec congue tortor. Aliquam sodales
          vulputate urna sed dictum. Etiam condimentum tellus a sodales
          condimentum. Mauris pulvinar, risus in varius commodo, orci odio
          commodo erat, eget vehicula velit ipsum et arcu. Ut at
        </p>
      </div>
      <Footer />
    </>
  );
}

export default DetailDestination;
