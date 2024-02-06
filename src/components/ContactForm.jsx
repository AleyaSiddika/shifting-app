import React, { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
      <h1 className="text-4xl mx-auto md:text-5xl lg:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-purple-600 to-blue-400">
        Let’s Talk
      </h1>
      <div className="w-full 2xl:w-8/12 bg-neutral-200rounded-md p-8 mx-auto lg:mt-16 mt-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              placeholder="Your name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email address"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 w-full text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
