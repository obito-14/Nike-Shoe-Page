import React from "react";
import Nike from "./images/Nike-Logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="mainContainer">
      <div className="imgBox">
        <img src={Nike} alt="Nike" className="mainImg" />
      </div>
      <div className="page">
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="loginBtn">Login</div>
    </div>
  );
};

export default Navbar;
