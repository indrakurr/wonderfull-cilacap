import React from "react";
import Sidebar from "../components/Sidebar";

function ManageDestination() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10 p-0">
          <h3>Dashboard Admin</h3>
          <div className="col-md-11 my-5 manage-destination">
            <h2>Manage Destination</h2>
            <table className="table table-striped table-hover">
              <thead className="">
                <tr className="fs-7">
                  <th scope="col">No</th>
                  <th scope="col">Destination Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageDestination;
