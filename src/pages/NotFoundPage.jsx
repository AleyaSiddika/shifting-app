// components/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-500 text-white">
      <h1 className="text-5xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-8">
        Oops! It seems like you've reached a page that doesn't exist.
      </p>
      <img
        src="https://i.imgur.com/Q2BAOd2.png" // Replace with your custom image or illustration
        alt="404 Illustration"
        className="max-w-md w-full rounded-lg shadow-lg mb-8"
      />
      <p className="text-lg">Let's get you back on track!</p>

      <Link
        to="/"
        className="bg-secondary-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-secondary-600"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
