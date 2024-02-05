import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border  shadow-lg shadow-box-shadow relative overflow-hidden bg-white hover:bg-gray-100 hover:shadow-lg hover:cursor-pointer">
      <div className="rounded-xl bg-gray-300  p-3 text-heading-1 w-max relative">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            ></path>
          </svg>
        </span>
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {title}
        </h2>
        <p className="md:text-lg text-heading-3 undefined">{description}</p>
      </div>
      <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-neutral-700/10 rounded-full"></span>
    </div>
  );
};

export default ServiceCard;
