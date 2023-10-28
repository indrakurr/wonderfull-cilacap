import React, { useEffect, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGetDestinations,
  selectDestinations,
} from "../store/getDestinationSlice";
import { Link } from "react-router-dom";
import search from "../assets/icon/search.svg";

const Destination = forwardRef((props, ref) => {
  const stateDestinations = useSelector(selectDestinations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetDestinations());
  }, [dispatch]);

  return (
    <div className="container-destinations" ref={ref}>
      <h2>Top Destinations to Visit</h2>
      {stateDestinations.status === "loading" && (
        <div className="loading-indicator">Loading...</div>
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
                  <p className="card-text">{destination.overview}</p>
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
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search destination"
          aria-label="Search"
          style={{
            borderRadius: "20px",
            boxShadow: "0px 4px 40px 0px rgba(115, 115, 115, 0.2)",
            marginTop: "30px",
          }}
        />
        <button className="input-group-text" type="submit">
          <img src={search} alt="Search" />
        </button>
      </form>
    </div>
  );
});

export default Destination;
