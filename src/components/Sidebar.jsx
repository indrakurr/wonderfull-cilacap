import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/icon/wonderful-cilacap-white-logo.png";
import homeIcon from "../assets/icon/house.svg";
import manageIcon from "../assets/icon/tools.svg";
import addIcon from "../assets/icon/plus-square.svg";


const Sidebar = () => {
  const location = useLocation();

  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block sidebar">
      <div className="container-sidebar">
        <a
          className="navbar-brand d-flex justify-content-start mt-3 sidebar-logo"
          href="/manage-destination"
        >
          <img
            src={logo}
            alt="logo"
            width="95"
            height="39"
            className="d-inline-block align-top"
          />
        </a>
        <ul className="nav flex-column">
          <li
            className={`nav-item sidebar-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/" className="nav-link text-white d-flex align-items-center">
              <img className="icon-sidebar" src={homeIcon} alt="home" />
              Back to Home
            </Link>
          </li>
          <li
            className={`nav-item sidebar-item ${
              location.pathname === "/manage-destination" ? "active" : ""
            }`}
          >
            <Link to="/manage-destination" className="nav-link text-white d-flex align-items-center">
              <img className="icon-sidebar" src={manageIcon} alt="manage" />
              Manage Destination
            </Link>
          </li>
          <li
            className={`nav-item sidebar-item ${
              location.pathname === "/add-destination" ? "active" : ""
            }`}
          >
            <Link to="/add-destination" className="nav-link text-white d-flex align-items-center">
              <img className="icon-sidebar" src={addIcon} alt="add" />
              Add Destination
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
