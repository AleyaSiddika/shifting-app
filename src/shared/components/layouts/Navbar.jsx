import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/16/solid";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="bg-primary-500">
      {/* Upper Row: Contact Info */}
      <div
        className={`container mx-auto flex flex-wrap items-center justify-center md:justify-between  ${
          isSticky ? "h-14" : ""
        }`}
      >
        <div className="flex items-center space-x-4">
          <div className="text-white flex items-center space-x-2">
            <PhoneIcon className="w-4 h-4" />
            <a
              href="callto:+35800909090"
              className="text-white hover:underline flex items-center space-x-2"
            >
              +35800909090
            </a>
          </div>
          <div className="text-white flex items-center space-x-2">
            <EnvelopeIcon className="w-4 h-4" />
            <a
              href="mailto:info@example.com"
              className="text-white hover:underline flex items-center space-x-2"
            >
              <span>info@example.com</span>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white flex items-center space-x-2">
            <MapPinIcon className="w-4 h-4" />
            <a
              href="#"
              className="text-white hover:underline flex items-center space-x-2"
            >
              Toivoniementie · Oulu
            </a>
          </div>
        </div>
      </div>
      <hr className="border-primary-300" />
      {/* Lower Row: Main Navbar */}
      <nav
        className={`bg-primary-500 p-2  ${
          isSticky
            ? "md:shadow-lg fixed w-full top-0 z-50 animate-growDown"
            : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-white font-bold text-3xl hover:text-secondary-500 transition duration-300"
          >
            Shifting Services
          </Link>

          {/* Large Screen Nav Items */}
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

          {/* Small Screen Menu Icon */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>

          {/* Small Screen Nav Items */}
          {isMenuOpen && (
            <div
              className={`md:hidden absolute  right-4 bg-primary-500 rounded z-50 ${
                isSticky ? "top-14" : "top-24 sm:top-20"
              }`}
            >
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
    </div>
  );
};

export default Navbar;
