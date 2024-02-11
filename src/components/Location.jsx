import React from "react";
import ContactForm from "./ContactForm";

export default function Location() {
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

      <div className="xl:mx-auto xl:container relative dark:bg-neutral-800">
        <div className="flex flex-wrap xl:mx-auto border-primary-200 shadow-lg border-2 rounded-lg xl:container">
          {/* About Section */}
          <div className="w-full lg:w-1/2 xl:pt-10 mb-16 lg">
            <div className="flex flex-col items-start xl:justify-start xl:px-0 px-4">
                <h1 className="text-4xl mx-auto md:text-5xl lg:text-7xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary-700 via-purple-600 to-blue-400">
                  Find Us Anytime
                </h1>
                <div className="w-full 2xl:w-8/12 bg-neutral-200 rounded-md p-8 mx-auto lg:mt-16 mt-8">
                  <div className="w-full">
                    <div className="px-3 lg:px-0">
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
          </div>
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 xl:pt-10 mb-16 lg:pl-24">
            <ContactForm onSubmit={handleContactFormSubmit} />
          </div>

        </div>
      </div>

      <h2 className="text-3xl font-bold text-center my-10 text-primary-500">Explore Our Location</h2>
      <div className="flex flex-wrap mx-auto rounded-lg w-full xl:ml-32 xl:container">
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1684.7719538421075!2d25.46933281324195!3d65.02215144298324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46802d58900d5c87%3A0xea4c308155f856dc!2sToivoniementie%201%2C%2090500%20Oulu!5e0!3m2!1sen!2sfi!4v1707666674985!5m2!1sen!2sfi"
              width="100%"
              height="620"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

      </div>
    </div>
  );
}
