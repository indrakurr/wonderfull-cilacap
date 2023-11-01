import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchGetDestinationById,
  selectDestination,
} from "../store/getDestinationById";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThreeCircles } from "react-loader-spinner";

function DetailDestination() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stateDestination = useSelector(selectDestination);

  useEffect(() => {
    dispatch(fetchGetDestinationById(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      {stateDestination.status === "loading" && (
        <div className="container-detail">
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
      {stateDestination.status === "failed" && (
        <div>
          <p>Something Went Wrong</p>
          <p>{stateDestination.message}</p>
        </div>
      )}
      {stateDestination.status === "success" && (
        <div className="container-detail col-xl-12 col-lg-12 col-sm-12">
          <div className="row">
            <div className="col-10 d-flex justify-content-start align-items-center">
              <h2>{stateDestination.data.destinationName}</h2>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
              <Link to="/" className="btn btn-primary">
                Back
              </Link>
            </div>
          </div>
          <div className="img-container">
            <img
              src={stateDestination.data.destinationImage}
              alt={stateDestination.data.destinationName}
            />
          </div>
          <p className="text-justify">{stateDestination.data.description}</p>
        </div>
      )}
      <Footer />
    </>
  );
}

export default DetailDestination;
