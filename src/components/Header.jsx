import React from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import Logo from "../assets/icon/wonderfull-cilacap-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

const Header = (props) => {
  const handleBannerClick = () => {
    props.scrollToBanner();
  };

  const handleAboutClick = () => {
    props.scrollToAbout();
  };

  const handleHistoryClick = () => {
    props.scrollToHistory();
  };

  const handleDestinationClick = () => {
    props.scrollToDestination();
  };

  const handleMapsClick = () => {
    props.scrollToMaps();
  };

  const handleGalleryClick = () => {
    props.scrollToGallery();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <a className="navbar-brand" href="/#" onClick={handleBannerClick}>
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
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={handleAboutClick}>
              <a className="nav-link" href="#/">
                About
              </a>
            </li>
            <li className="nav-item" onClick={handleHistoryClick}>
              <a className="nav-link" href="#/">
                History
              </a>
            </li>
            <li className="nav-item" onClick={handleDestinationClick}>
              <a className="nav-link" href="#/">
                Destinations
              </a>
            </li>
            <li className="nav-item" onClick={handleMapsClick}>
              <a className="nav-link" href="#/">
                Maps
              </a>
            </li>
            <li className="nav-item" onClick={handleGalleryClick}>
              <a className="nav-link" href="#/">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                FaQ
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {auth.isAuthorized() ? (
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  <FontAwesomeIcon icon={faUser} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <ButtonAdmin />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <ButtonLogout />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <li className="nav-item">
                <ButtonLogin />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

function ButtonLogin () {
  return (
    <Link to="/login" className="btn btn-primary">
      Login
    </Link>
  );
}
function ButtonLogout() {
  return (
    <a
      className="btn btn-danger dropdown-button"
      href="/#"
      onClick={() => auth.logout()}
    >
      Logout
    </a>
  );
}
function ButtonAdmin() {
  return (
    <Link to="/manage-destination" className="btn btn-primary dropdown-button">
      Admin
    </Link>
  );
}
