import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon/wonderful-cilacap-white-logo.png";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block sidebar">
      <div className="container-sidebar">
        <a className="navbar-brand d-flex justify-content-start mt-3 sidebar-logo" href="/#">
          <img
            src={logo}
            alt="logo"
            width="95"
            height="39"
            className="d-inline-block align-top"
          />
        </a>
        <ul className="nav flex-column">
          <li className="nav-item sidebar-item">
            <Link to="/manage-destination" className="nav-link text-white">
              Manage Destination
            </Link>
          </li>
          <li className="nav-item sidebar-item">
            <Link to="/add-destination" className="nav-link text-white">
              Add Destination
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
