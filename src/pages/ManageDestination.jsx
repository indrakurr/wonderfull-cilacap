import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGetDestinations,
  selectDestinations,
} from "../store/getDestination";
import { ThreeCircles } from "react-loader-spinner";
import Sidebar from "../components/Sidebar";
import { Table } from "react-bootstrap";
import viewIcon from "../assets/icon/eye.svg";
import editIcon from "../assets/icon/pencil-square.svg";
import deleteIcon from "../assets/icon/trash.svg";
import { fetchDeleteDestination } from "../store/deleteDestination";
import { Link } from "react-router-dom";

function ManageDestination() {
  const [isReload, setIsReload] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const stateDestinations = useSelector(selectDestinations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetDestinations());
    setIsReload(false);
  }, [dispatch, isReload]);

  const openDestinationModal = (destination) => {
    setSelectedDestination(destination);
  };

  const closeDestinationModal = () => {
    setSelectedDestination(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Do you want delete this Destination?")) {
      dispatch(fetchDeleteDestination(id));
      setIsReload(true);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10 p-0 content">
          <h3>Dashboard Admin</h3>
          <div className="col-md-11 my-5 manage-destination">
            <h2>Manage Destination</h2>
            {stateDestinations.status === "loading" && (
              <div className="container-detail">
                <div className="loading-indicator d-flex justify-content-center mt-5 mb-5">
                  <ThreeCircles
                    height="130"
                    width="130"
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
                <p>Something Went Wrong</p>
                <p>{stateDestinations.message}</p>
              </div>
            )}
            {stateDestinations.status === "success" && (
              <div className="table-responsive">
                <Table className="table table-hover">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Destination Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">Location</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stateDestinations.data.map((destination, index) => (
                      <tr key={destination.id}>
                        <td>{index + 1}</td>
                        <td>{destination.destinationName}</td>
                        <td>
                          <img
                            className="image-table"
                            src={destination.destinationImage}
                            alt={destination.destinationName}
                            width={85}
                            height={69}
                          />
                        </td>
                        <td>{destination.location}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            style={{ width: "auto", marginRight: "5px" }}
                            onClick={() => openDestinationModal(destination)}
                          >
                            <img src={viewIcon} alt="view" />
                          </button>
                          <Link
                            to={`/edit-destination/${destination.id}`}
                            className="btn btn-success"
                            style={{ width: "auto", marginRight: "5px" }}
                          >
                            <img src={editIcon} alt="edit" />
                          </Link>
                          <button
                            className="btn btn-danger"
                            style={{ width: "auto", marginRight: "5px" }}
                            onClick={() => handleDelete(destination.id)}
                          >
                            <img src={deleteIcon} alt="delete" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedDestination && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-view" role="document">
            <div className="modal-content modal-view px-2">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedDestination.destinationName}
                </h5>
                <button
                  type="button"
                  className="btn btn-transparent"
                  onClick={closeDestinationModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedDestination.destinationImage}
                  alt={selectedDestination.destinationName}
                  width={285}
                  height={269}
                  style={{ borderRadius: "10px" }}
                />
                <h5 className="mt-3 text-primary">
                  {selectedDestination.location}
                </h5>
                <p className="text-justify">
                  {selectedDestination.description}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={closeDestinationModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageDestination;
