import React, { useState } from "react";
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  const navBg = {
    backgroundColor: "rgb(34, 48, 60);",
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      toggleMode={props.toggleMode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.text1}
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch" onClick={props.toggleMode}>
            <input
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={props.style}
            >
              {props.text}
            </label>
          </div>
          <form className="d-flex mx-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: "PropTypes.String.isRequired",
  text1: "PropTypes.String",
};

Navbar.defaultProps = {
  title: "No-title",
  text1: "None",
};
