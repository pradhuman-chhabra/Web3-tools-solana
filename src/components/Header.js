import React from "react";
import "../styles/header.css";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"></nav> */}
      <nav className="navbarCss navbar navbar-expand-lg">
        <div className="navbarMaxWidth container-fluid">
          <Link to="/" className="brandName navbar-brand">
            <img
              className="brandImg d-inline-block align-text-top"
              src="./images/seetasmalllogo.png"
              alt="Logo"
              // height="60"
            />
            Web3 Tools Solana
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
                <Link className="anchorMod" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="anchorMod" to="/Vision">
                  Vision
                </Link>
              </li>
              <li className="nav-item">
                <Link className="anchorMod" to="/Testimonials">
                  Benefits
                </Link>
              </li>
              <li className="nav-item">
                <Link className="anchorMod" to="/Team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="anchorMod" to="/Workflow">
                  {/* Workflow */}
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                  <a className="dropdown-item" href="#">
                      Action
                    </a>
                    </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    </li>
                  <li>
                  <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
