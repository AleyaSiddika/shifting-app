import React, { useState } from "react";

const QuoteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    name: "",
    email: "",
    phone: "",
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
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          placeholder="Moving From"
          type="text"
          id="origin"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="Moving To"
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
        />
      </div>
      <div className="mb-4">
        <input
          placeholder="Pick a date"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
        />
      </div>
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
          placeholder="  Email address"
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
        <input
          placeholder=" Phone number"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
        />
      </div>
      <button
        type="submit"
        className="bg-primary-500 w-full text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-500"
      >
        Get a Quote
      </button>
    </form>
  );
};

export default QuoteForm;
