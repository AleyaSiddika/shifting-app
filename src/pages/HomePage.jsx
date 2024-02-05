import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />

      <section className="container my-10">
        <h2 className="text-3xl text-center font-bold mb-6">
          Service We Provide
        </h2>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container">
          <h2 className="text-3xl text-center font-bold mb-6">Who Are We</h2>
        </div>
      </section>

      <section className="container my-10">
        <h2 className="text-3xl text-center font-bold mb-6">
          Customer Feedback
        </h2>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container">
          <h2 className="text-3xl text-center font-bold mb-6">
            Contact Information
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomePage;
