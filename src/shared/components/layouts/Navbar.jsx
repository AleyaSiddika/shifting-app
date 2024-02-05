import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/services", text: "Services" },
    { to: "/about", text: "About Us" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="bg-primary-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white font-bold text-3xl hover:text-secondary-500 transition duration-300"
        >
          Shifting Services
        </Link>
        <div className="hidden md:flex space-x-4">
          {navLinks.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className={`text-white px-3 py-2 rounded transition duration-300 ${
                location.pathname === to
                  ? "bg-secondary-500 hover:text-white"
                  : "hover:bg-secondary-500 hover:text-white"
              }`}
            >
              {text}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-primary-500 rounded z-50">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className={`block text-center text-white px-6 py-2 rounded transition duration-300 ${
                  location.pathname === to
                    ? "bg-secondary-500 hover:text-white"
                    : "hover:bg-secondary-500 hover:text-white"
                }`}
                onClick={toggleMenu}
              >
                {text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
