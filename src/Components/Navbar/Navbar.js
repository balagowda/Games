import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand text-white fs-4">simple<span className="colored-letter">Play</span></h1>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white fs-5" >Home</Link>
              </li>
              <li className="nav-item ">
                <Link to="/about" className="nav-link text-white fs-5" >About</Link>
              </li>
              <li className="nav-item ">
                <Link to="/contact" className="nav-link text-white fs-5">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;