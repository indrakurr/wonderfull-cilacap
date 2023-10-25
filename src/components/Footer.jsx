import React from "react";
import logo from "../assets/icon/wonderful-cilacap-white-logo.png";
import instagramLogo from "../assets/icon/instagram.svg";
import linkedinLogo from "../assets/icon/linkedin.svg";
import githubLogo from "../assets/icon/github.svg";

function Footer() {
  return (
    <div className="container-footer text-center text-lg-start text-white">
      <section>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-4 mx-auto mt-3">
            <div className="me-3 mb-3">
              <img src={logo} alt="Logo" width="110px" />
            </div>
            <p>
              "Wonderful Cilacap" is a tourism website that showcases the
              natural and cultural wonders of Cilacap, Central Java. Created as
              a comprehensive guide for travelers looking to explore the charms
              of this city, the website offers reliable information, beautiful
              images, and travel recommendations to ensure an unforgettable
              tourism experience.
            </p>
          </div>
         {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
            <h4 className="mb-4 font-weight-bold">
              Wonderfull Cilacap Menu
            </h4>
            <p>
              <a className="text-white" href="/#">
                Home
              </a>
            </p>
            <p>
              <a className="text-white" href="/#">
                About
              </a>
            </p>
            <p>
              <a className="text-white" href="/#">
                Destinations
              </a>
            </p>
            <p>
              <a className="text-white" href="/#">
                FaQ
              </a>
            </p>
          </div>
          {/* Grid column */}
          <hr className="w-100 clearfix d-md-none" />
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4 className="mb-4 font-weight-bold">Contact Us</h4>
            <p>
              <i className="fas fa-home mr-3"></i> Purwokerto, Jawa Tengah,
              Indonesia
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i>{" "}
              kurniawanindra9d@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> 0815 7572 6544
            </p>
            {/* social media */}
            <div className="icon d-flex gap-3 mt-3">
              <a href="https://www.instagram.com/indrakuur">
                <img src={instagramLogo} alt="Instagram Icon" />
              </a>
              <a href="https://www.linkedin.com/in/indrakurr/">
                <img src={linkedinLogo} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/indrakurr">
                <img src={githubLogo} alt="GitHub Icon" />
              </a>
            </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </section>
    </div>
  );
}

export default Footer;
