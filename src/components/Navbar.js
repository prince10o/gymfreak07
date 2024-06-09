import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, SetNav] = useState(false);

  const changeBckground = () => {
    if (window.scroll >= 50) {
      SetNav(true);
    } else {
      SetNav(false);
    }
  };
  window.addEventListener("scroll", changeBckground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="/" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn"></input>
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main">Header</Link>
        </li>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="offer">Offer</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
