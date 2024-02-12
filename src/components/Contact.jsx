import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const handleContactFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };
  const about = {
    location: "location",
    phone: "+3434343443",
    email: "email@emaol.com",
  };
  return (
    <div className="py-4 lg:py-8 relative">
      <img
        src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
        className="h-2/5 lg:h-full w-full lg:w-1/2 absolute dark:hidden inset-0 object-cover object-center xl:block hidden"
        alt="map"
      />
      <div className="xl:mx-auto xl:container relative dark:bg-neutral-800">
        <div className="flex flex-wrap xl:mx-auto xl:container">
          {/* About Section */}
          <div className="w-full relative rounded-md overflow-hidden lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
            <img
              src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
              className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center dark:hidden"
              alt="map"
            />
            <div className="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4">
              <div className="w-full 2xl:pl-48 xl:pt-1">
                <div className="px-3 lg:px-0">
                  <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                    Find Us Anytime
                  </h1>
                  <p className="leading-normal text-gray-800 dark:text-white text-base md:text-xl lg:text-2xl mb-4">
                    Don't hesitate to contact with us
                  </p>
                </div>

                <div className="w-full md:w-10/12">
                  <div className="mt-4 md:mt-6">
                    <h2 className="text-sm md:text-base text-primary-default font-semibold">
                      Address
                    </h2>
                    <h2 className="text-gray-800 dark:text-neutral-200 text-base md:text-lg leading-8 tracking-wider mt-2">
                      {about.location}
                    </h2>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <h2 className="text-sm md:text-base text-primary-default font-semibold">
                      Contact
                    </h2>
                    <h2 className="text-gray-800 dark:text-neutral-200 text-base md:text-lg leading-8 tracking-wider mt-2">
                      {about.phone}
                    </h2>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <h2 className="text-sm md:text-base text-primary-default font-semibold">
                      Email
                    </h2>
                    <h2 className="text-gray-800 dark:text-neutral-200 text-base md:text-lg leading-8 tracking-wider mt-2">
                      {about.email}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 xl:pt-10 lg:pl-24">
            <ContactForm onSubmit={handleContactFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
