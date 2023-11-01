import React, { useEffect, forwardRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGetDestinations,
  selectDestinations,
} from "../store/getDestination";
import { Link } from "react-router-dom";
import search from "../assets/icon/search.svg";
import { ThreeCircles } from "react-loader-spinner";
import { Modal, Button } from "react-bootstrap";

const Destination = forwardRef((props, ref) => {
  const stateDestinations = useSelector(selectDestinations);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchGetDestinations());
  }, [dispatch]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = () => {
    return stateDestinations.data.filter((destination) =>
      destination.destinationName
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  };

  const openModal = () => {
    setSearchResults(performSearch());
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-destinations" ref={ref}>
      <h2>Top Destinations to Visit</h2>
      {stateDestinations.status === "loading" && (
        <div>
          <div className="loading-indicator d-flex justify-content-center mt-5 mb-5">
            <ThreeCircles
              height="100"
              width="100"
              color="blue"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        </div>
      )}

      {stateDestinations.status === "failed" && (
        <div>
          <p>Terjadi kesalahan:</p>
          <p>{stateDestinations.message}</p>
        </div>
      )}

      {stateDestinations.status === "success" && (
        <div className="row">
          {stateDestinations.data.map((destination, index) => (
            <div className="col-lg-3 col-sm-4 col-sm-6 py-3" key={index}>
              <div className="card-destinations">
                <img
                  src={destination.destinationImage}
                  className="card-img-top"
                  alt="Destination"
                />
                <div className="card-body">
                  <h5 className="card-title">{destination.destinationName}</h5>
                  <p className="card-text-location">{destination.location}</p>
                  <Link
                    to={`/detail-destination/${destination.id}`}
                    className="btn btn-primary"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <form
        className="d-flex search col-xl-12 col-md-8 col-sm-8 justify-content-center"
        role="search"
        id="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search destination"
          aria-label="Search"
          style={{
            borderRadius: "20px",
            boxShadow: "0px 4px 40px 0px rgba(115, 115, 115, 0.1)",
            marginTop: "30px",
          }}
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="input-group-text" type="submit" onClick={openModal}>
          <img src={search} alt="Search" />
        </button>
      </form>

      <Modal
        show={showModal}
        onHide={closeModal}
        className="modal-content-search"
      >
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body className="search-modal">
          {searchResults.map((destination, index) => (
            <div>
              <div className="card-destinations" key={index}>
                <img
                  src={destination.destinationImage}
                  className="card-img-top"
                  alt="Destination"
                />
                <div className="card-body">
                  <h5 className="card-title">{destination.destinationName}</h5>
                  <p className="card-text-location">{destination.location}</p>
                  <Link
                    to={`/detail-destination/${destination.id}`}
                    className="btn btn-primary"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
});

export default Destination;
