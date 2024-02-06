import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light border-bottom"
      style={{ borderColor: "var(--bs-primary) !important" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/#">
          <img
            src="/jk.svg"
            width="45"
            height="45"
            alt=""
            style={{
              position: "relative",
              top: "-2px",
              scale: "1.2",
              marginRight: "8px",
            }}
          />
        </Link>
        {/* <button
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
              <a
                className={`hover-underline-animation nav-link ${
                  isActive("home") ? "active" : ""
                }`}
                aria-current="page"
                href="/contact"
              >
                Kontakt
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`hover-underline-animation nav-link ${
                  isActive("blog") ? "active" : ""
                }`}
                aria-current="page"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`hover-underline-animation nav-link ${
                  isActive("about") ? "active" : ""
                }`}
                aria-current="page"
                href="/about"
              >
                Über
              </a>
            </li>
          </ul>
        </div>
         */}
      </div>
    </nav>
  );
};
export default Navbar;
