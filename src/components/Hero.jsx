import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="bg-primary-600 text-white text-center py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to our Shifting Services
        </h1>
        <p className="text-lg">We make moving stress-free and easy!</p>
        <Link
          to="/get-started"
          className="bg-secondary-500 text-white px-6 py-2 mt-8 rounded-full hover:bg-secondary-600"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Hero;
