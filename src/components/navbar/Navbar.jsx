import React, { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>OsborEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Agents</a>
        <a href="">Contacts</a>
      </div>
      <div className="right">
        <a href="">Sign In</a>
        <a href="" className="register">
          Sign Up
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Agents</a>
          <a href="">Contacts</a>
          <a href="">Sign In</a>
          <a href="" className="register">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
