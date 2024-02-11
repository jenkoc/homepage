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
            width="50"
            height="50"
            alt="logo of Jens Kock"
          />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
