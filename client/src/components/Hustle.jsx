import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlinePhone } from "react-icons/ai";

const Hustle = () => {
  const images = [
    {
      id: 1,
      title: "Noah Distributors",
      description: "Hire Bikes & Tour Guide in Lukenya",
      phone: "0677237238",
      url: "https://images.pexels.com/photos/163491/bike-mountain-mountain-biking-trail-163491.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Pam Bakeries",
      description: "Cakes, Cookies, Yoghurts",
      url: "https://images.pexels.com/photos/2525682/pexels-photo-2525682.png?auto=compress&cs=tinysrgb&w=1600",
      phone: "0677237238",
    },
    // {
    //   id: 3,
    //   title: "Swimming",
    //   description: "Lukenya Resort",
    //   url: "https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // },
    // {
    //   id: 4,
    //   title: "Movies & Gaming",
    //   description: "TV Room Campus",
    //   url: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1600",
    // },
    // {
    //   id: 5,
    //   title: "Meet New People",
    //   description: "Use Our App",
    //   url: "https://images.pexels.com/photos/3569601/pexels-photo-3569601.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //   link: "https://chipyclique-chat.netlify.app",
    // },
    // {
    //   id: 6,
    //   title: "image3",
    //   description: "Hiking is the best",
    //   url: "https://images.pexels.com/photos/691034/pexels-photo-691034.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handlePrevious = () => {
    const container = document.getElementById("image-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition - visibleWidth);
    container.scrollTo({
      left: scrollPosition - visibleWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const container = document.getElementById("image-container");
    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.offsetWidth;

    setScrollPosition((prevPosition) => prevPosition + visibleWidth);
    container.scrollTo({
      left: scrollPosition + visibleWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="pb-[30px]">
      <h2 className="text-2xl text-[#02AEEE] mb-[20px]">
        Student Hustles In Campus
      </h2>
      {/*  */}
      <div className="flex flex-col items-center" id="hustle">
        <div className="flex items-center justify-between w-full mb-4">
          <button
            className="text-3xl text-gray-600 focus:outline-none"
            onClick={handlePrevious}
            disabled={scrollPosition === 0}
          >
            &lt;
          </button>
          <button
            className="text-3xl text-gray-600 focus:outline-none"
            onClick={handleNext}
            disabled={scrollPosition >= images.length * 300} // Assuming each image has a fixed width of 300px
          >
            &gt;
          </button>
        </div>
        <div
          id="image-container"
          className="flex overflow-x-scroll w-full prompt pb-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((image) => (
            <div key={image.id} className="flex-shrink-0 mx-2">
              <img
                src={image.url}
                alt={image.title}
                className="w-64 h-64 object-cover rounded-lg"
              />
              <div className="mt-2">
                <h2 className="text-lg font-bold">{image.title}</h2>
                <p className="text-sm text-gray-300">{image.description}</p>
                <div className="flex justify-end">
                  {image.phone && (
                    <a href={`tel:${image.phone}`}>
                      <AiOutlinePhone className="text-2xl text-[#02AEEE]" />
                    </a>
                  )}
                </div>
                <div className="flex justify-end">
                  {image.link && (
                    <a
                      href={`${image.link}`}
                      target="_blank"
                      rel="noreferrer"
                      title="click"
                    >
                      <AiOutlineArrowRight className="text-2xl text-[#02AEEE]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Hustle;
