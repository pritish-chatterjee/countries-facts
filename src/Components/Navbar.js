import React from "react";
import "../styling/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar-brand" href="/">
        <img
          src="icon.png"
          className="d-inline-block align-top image"
          alt="website-logo"
        />
        Countries' Facts
      </a>
    </div>
  );
}

export default Navbar;
