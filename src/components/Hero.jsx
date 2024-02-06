import React from "react";
import bg from "../assets/images/bg2.png";
import vanImage from "../assets/images/van.png";
import QuoteForm from "./QuoteForm";

const Hero = () => {
  const handleSubmit = (formData) => {
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };
  return (
    <section
      className="hero bg-cover bg-center relative"
      style={{ backgroundImage: `url(${vanImage})` }}
    >
      <div className="absolute inset-0 bg-black   opacity-60"></div>
      <div className="relative md:flex">
        <div className="md:w-1/2">
          <div className="container md:ml-12 lg:ml-20 mx-auto flex items-center justify-center min-h-96 md:h-screen relative z-10">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider ">
                Effortless Shifting Services
              </h1>
              <p className="text-lg sm:text-xl mb-6">
                We help you move to your new home with ease and care.
              </p>
              <a
                href="#services"
                className="bg-primary-500 w-full text-white hover:bg-primary-600  px-6 py-2 mt-8 rounded-full"
              >
                Try Out Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="p-12 lg:px-40 mx-auto ">
            <QuoteForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
