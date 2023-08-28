import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            AL Teeba LLC
            <p className="nav-sub">
              You have to dream and we have to investigate
            </p>
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active navbar-font"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4 " to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-4" href="#">
                  Jobs in UAE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pe-4" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-4" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
