import React from "react";
import image from "../assets/destination.jpg";
import search from "../assets/icon/search.svg"

function Destination() {
  return (
    <div className="container-destinations">
      <h2>Top Destinations to Visit</h2>
      <div className="row">
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 py-3">
          <div className="card-destinations">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#/" className="btn btn-primary">
                View Detail
              </a>
            </div>
          </div>
        </div>
      </div>
      <form
        className="d-flex search col-xl-12 col-md-8 col-sm-8 justify-content-center"
        role="search"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search destination"
          aria-label="Search"
        />
        <button className="input-group-text" type="submit">
          <img src={search} alt="search" />
        </button>
      </form>
    </div>
  );
}

export default Destination;
