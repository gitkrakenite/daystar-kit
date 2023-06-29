import { useState } from "react";

const dummyRentals = [
  {
    id: 1,
    title: "Kryptons Hostel",
    careTaker: "Joshua Okwema",
    rent: "Ksh. 11,000",
    mainPic:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
    secPic:
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600",
    thirdPic:
      "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const images = [
  {
    title: "Image 1",
    url: "https://images.pexels.com/photos/1996332/pexels-photo-1996332.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Image 2",
    url: "https://images.pexels.com/photos/2009697/pexels-photo-2009697.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Image 3",
    url: "https://images.pexels.com/photos/614505/pexels-photo-614505.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  // Add more images as needed
];

const Accomodation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <div id="accommodation" className=" mx-auto p-4">
      <h2 className="text-2xl text-[#02AEEE] mb-[20px]">
        Off Campus Accomodation
      </h2>
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={handlePrevious}
          className="mr-4 px-4 py-2 border border-gray-400 rounded hover:bg-gray-200"
        >
          &lt; Previous
        </button>
        <img
          src={currentImage.url}
          alt={currentImage.title}
          className="w-auto h-auto max-h-80 rounded-lg shadow-lg"
        />
        <button
          onClick={handleNext}
          className="ml-4 px-4 py-2 border border-gray-400 rounded hover:bg-gray-200"
        >
          Next &gt;
        </button>
      </div>
      <div className="text-center">{currentImage.title}</div>
    </div>
  );
};

export default Accomodation;
