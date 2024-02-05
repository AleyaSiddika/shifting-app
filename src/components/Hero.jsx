import React from "react";
import { Link } from "react-router-dom";

import bg from "../assets/images/bg2.png";

const Hero = () => {
  return (
    // <header className="bg-primary-600 text-white text-center py-16">
    //   <div className="container mx-auto">
    //     <h1 className="text-4xl font-bold mb-4">
    //       Welcome to our Shifting Services
    //     </h1>
    //     <p className="text-lg mb-8">We make moving stress-free and easy!</p>
    //     <Link
    //       to="/get-started"
    //       className="bg-secondary-500 text-white px-6 py-2 mt-8 rounded-full hover:bg-secondary-600"
    //     >
    //       Get Started
    //     </Link>
    //   </div>
    // </header>
    <section
      className="hero bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex items-center justify-center h-screen relative z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Effortless Shifting Services
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            We help you move to your new home with ease and care.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
