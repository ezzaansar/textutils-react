import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode === "pink" ? "navbar-dark bg-dark" : `navbar-${props.mode} bg-${props.mode}`
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === "pink" ? "light" : "dark"}`}>
            <input
              className="form-check-input"
              onClick={props.goggleMode}
              type="checkbox"
              role="switch"
              id="pinkModeSwitch"
            />
            <label className="form-check-label" htmlFor="pinkModeSwitch">
              Pink Mode
            </label>
          </div>

          <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"} ms-3`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title",
  aboutText: "AboutText",
};
