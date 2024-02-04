// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          Shifting Services
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/about" className="text-white">
            About Us
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
