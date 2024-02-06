import { StarIcon } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import roomImage from "../assets/images/room.png";

const AboutPage = () => {
  const feedbackData = [
    {
      name: "John Doe",
      ratings: 5,
      comment:
        "Excellent service! The team was professional, efficient, and friendly. I highly recommend their services to anyone looking to move.",
      image: "/customer1.jpg",
    },
    {
      name: "Jane Smith",
      ratings: 4,
      comment:
        "I was impressed with the punctuality and care taken with my belongings. The whole process was stress-free, and I couldn't be happier with the outcome.",
      image: "/customer2.jpg",
    },
    {
      name: "David Johnson",
      ratings: 5,
      comment:
        "Great experience from start to finish. The team was responsive, professional, and made sure everything was handled with care. I would definitely use their services again.",
      image: "/customer3.jpg",
    },
  ];

  const images = [
    roomImage,
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/501",
    "https://via.placeholder.com/502",
    "https://via.placeholder.com/503",
    "https://via.placeholder.com/504",
    "https://via.placeholder.com/505",
  ];

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-6">Who are We</h2>
          <p className="text-lg text-center text-gray-700">
            We are a team of dedicated professionals committed to providing the
            best shifting services to our customers. With years of experience in
            the industry, we ensure a smooth and hassle-free moving experience.
          </p>
        </div>

        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-md shadow-md hover:shadow-lg hover:animate-pulse transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10">
        <h2 className="text-3xl text-center font-bold mb-6">
          Customer Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbackData.map((feedback, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              {/* <img
                src={feedback.image}
                alt={`Customer ${index + 1}`}
                className="w-20 h-20 rounded-full mb-4"
              /> */}
              <UserCircleIcon className="text-primary-500 w-14 h-14" />
              <p className="text-lg font-semibold mb-2">{feedback.name}</p>
              <p className="text-gray-600">{feedback.comment}</p>
              <div className="flex mt-4">
                {[...Array(feedback.ratings)].map((_, index) => (
                  <StarIcon className="h-4 w-4 text-primary-700" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
