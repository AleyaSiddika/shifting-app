// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white font-bold text-xl hover:text-secondary-500 transition duration-300"
        >
          Shifting Services
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-secondary-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-secondary-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-secondary-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-secondary-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <span className="material-icons">menu</span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-primary-500 py-2 px-4 rounded z-50">
            <Link
              to="/"
              className="block text-white mb-2 hover:text-secondary-500 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-white mb-2 hover:text-secondary-500 transition duration-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-white mb-2 hover:text-secondary-500 transition duration-300"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-white mb-2 hover:text-secondary-500 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
