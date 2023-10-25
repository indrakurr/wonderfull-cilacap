import React from "react";
import Logo from "../assets/icon/wonderfull-cilacap-logo.png";

const Header = (props) => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <a className="navbar-brand" href="#/">
          <img
            src={Logo}
            alt="logo"
            width="95"
            height="39"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Maps
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Galery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                FaQ
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-primary">Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
