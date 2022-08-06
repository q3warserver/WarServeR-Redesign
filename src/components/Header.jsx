import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <section className="header-wrapper">
      <nav className="navbar navbar-dark navbar-expand-md justify-content-center">
        <div className="container-fluid">
          <Link className="ms-5 navbar-brand" to="/">
            WarServeR
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
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/clientinfo">
                  Client Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/maps">
                  Maps
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servers">
                  Servers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </section>
  );
}

export default Header;
