// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Connect with Us</h3>
          <div className="flex items-center mt-2 space-x-4">
            {/* Add social media icons or links */}
            <a href="#" className="text-white hover:text-secondary-500">
              <span className="material-icons">facebook</span>
            </a>
            <a href="#" className="text-white hover:text-secondary-500">
              <span className="material-icons">twitter</span>
            </a>
            <a href="#" className="text-white hover:text-secondary-500">
              <span className="material-icons">instagram</span>
            </a>
          </div>
        </div>
        <div>
          <p>&copy; 2024 Shifting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
