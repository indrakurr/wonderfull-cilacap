import React, { forwardRef } from "react";
import gallery1 from "../assets/gallery/galericilacap1.png";
import gallery2 from "../assets/gallery/galericilacap2.png";
import gallery3 from "../assets/gallery/galericilacap3.jpg";
import gallery4 from "../assets/gallery/galericilacap4.jpg";
import gallery5 from "../assets/gallery/galericilacap5.jpg";
import gallery6 from "../assets/gallery/galericilacap6.jpg";

const Gallery = forwardRef((props, ref) => {
  const imageList = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <div className="container-gallery" ref={ref}>
      <div className="text-center">
        <h2>Visual Journey of Cilacap</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="image-scroll-container d-flex justify-content-start gallery"
            style={{
              whiteSpace: "nowrap", 
              animation: "scroll 30s linear infinite alternate",
            }}
          >
            {imageList.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="imageGallery"
                className="image-gallery"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Gallery;
