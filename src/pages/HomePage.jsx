import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Contact from "../components/Contact";
import AboutPage from "./AboutPage";
import OurCustomers from "../components/OurCustomers";

const HomePage = () => {
  const servicesData = [
    {
      title: "Van Rental",
      description:
        "Rent vans of different sizes for your moving needs. Prices starting from €29.90.",
    },
    {
      title: "Trailer Rental",
      description:
        "Choose from canopy carts or cabin carts for transporting goods. Prices starting from €9.90.",
    },
    {
      title: "Moving Supplies",
      description:
        "Get all the packaging equipment needed for moving, including boxes, stretch films, bubble wrap, and more.",
    },
  ];

  return (
    <>
      <Hero />

      <section id="services" className="py-16 bg-primary-100">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 space-y-10 md:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
              What we offer
            </h1>
            <p className="md:text-lg text-heading-3 undefined">
              Navigate the country with comfortable with use
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <AboutPage />
      <OurCustomers />

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-6">Contact Us</h2>
          <Contact />
        </div>
      </section>
    </>
  );
};

export default HomePage;
