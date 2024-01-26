// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/#">
          <div className="d-flex">
            <Image
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
            <div>
              <h5 className="m-0" style={{ color: "var(--textColor) !important" }}>Jens Kock</h5>
              <h6 className="m-0" style={{ color: "var(--textColor) !important" }}>IT-Consulting & Services</h6>
            </div>
          </div>
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
              <Link
                className="hover-underline-animation nav-link active"
                aria-current="page"
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="hover-underline-animation nav-link active"
                aria-current="page"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
