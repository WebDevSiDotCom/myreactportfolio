import React, { useState } from "react";
import "../styles.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNavClick() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Logo</div>
      <ul className={`navbar-links ${isNavOpen ? "open" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className={`hamburger ${isNavOpen ? "open" : ""}`} onClick={handleNavClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar
