import Carousel from "react-bootstrap/Carousel";

import { useEffect, useRef, useState } from "react";
import "./hero.css";

import Dbus from "../assets/dbus.png";

const Hero = () => {
  const heroData = [
    {
      id: 1,
      image: Dbus,
      text: "Transport Schedule",
      url: "#transport",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "The Best Food Spots",
      url: "#foodie",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Off Campus Accomodation",
      url: "#accomodation",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/7551755/pexels-photo-7551755.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Fun Around Campus",
      url: "#fun",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/8937359/pexels-photo-8937359.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Best Student Hustles",
      url: "#hustle",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/13908963/pexels-photo-13908963.jpeg?auto=compress&cs=tinysrgb&w=1600",
      text: "Socialize And Connect",
      url: "#social",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const handleAutoTransition = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData?.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(handleAutoTransition, 8000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const handleInteraction = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    // Clear the timer and start a new one when currentIndex changes
    clearInterval(timerRef.current);
    timerRef.current = setInterval(handleAutoTransition, 8000);

    // Clean up the timer when the component unmounts or currentIndex changes
    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  return (
    <div id="home" className="mt-[30px]">
      {/* desktop Caraousel */}
      <div className="hidden md:block">
        <Carousel indicators={false}>
          <Carousel.Item interval={7000} className="max-h-[100vh]">
            <img
              className="d-block w-100 max-h-[100vh] object-cover rounded-xl"
              src={Dbus}
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className="text-[#02AEEE] text-4xl lg:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  Transport Schedules
                </h3>
                <p className=" text-zinc-300 tracking-wider text-xl  lg:text-2xl mb-[15px]">
                  To and From Nairobi Campus 7 days a week
                </p>
                <p className=" text-zinc-300 tracking-wider text-lg md:text-xl pb-2">
                  No need to guess if there is a bus available
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/*  */}
          <Carousel.Item interval={7000} className="max-h-[100vh]">
            <img
              className="d-block w-100 max-h-[100vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className="text-[#02AEEE] text-4xl lg:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  The Best Food Spots In Athi
                </h3>
                <p className=" text-zinc-300 tracking-wider text-xl  lg:text-2xl mb-[15px]">
                  The choices they offer and a budget range
                </p>
                <p className=" text-zinc-300 tracking-wider text-lg md:text-xl pb-2">
                  If you are a foodie we&apos;ve got you
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/*  */}
          <Carousel.Item interval={7000} className="max-h-[100vh]">
            <img
              className="d-block w-100 max-h-[100vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className="text-[#02AEEE] text-4xl lg:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  Off Campus Accomodation
                </h3>
                <p className=" text-zinc-300 tracking-wider text-xl  lg:text-2xl mb-[15px]">
                  The choices they offer and rent range
                </p>
                <p className=" text-zinc-300 tracking-wider text-lg md:text-xl pb-2">
                  No need to go around asking
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          {/*  */}
          <Carousel.Item interval={7000} className="max-h-[100vh]">
            <img
              className="d-block w-100 max-h-[100vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/16434373/pexels-photo-16434373/free-photo-of-man-on-a-quad-bike.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className="text-[#02AEEE] text-4xl lg:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  Fun Activities In Athi Campus
                </h3>
                <p className=" text-zinc-300 tracking-wider text-xl  lg:text-2xl mb-[15px]">
                  Choices around and the budget range
                </p>
                <p className=" text-zinc-300 tracking-wider text-lg md:text-xl pb-2">
                  It does not have to be a dull journey
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000} className="max-h-[100vh]">
            <img
              className="d-block w-100 max-h-[100vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className="text-[#02AEEE] text-4xl lg:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  Socialize And Connect
                </h3>
                <p className=" text-zinc-300 tracking-wider text-xl  lg:text-2xl mb-[15px]">
                  Use Our Platform To Find New Friends
                </p>
                <p className=" text-zinc-300 tracking-wider text-lg md:text-xl pb-2">
                  campus does not have to be a lonely experience
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={7000} className="max-h-[100vh]">
            <img
              className="d-block w-100 max-h-[100vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/936048/pexels-photo-936048.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className="text-[#02AEEE] text-4xl lg:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  Best Student Hustles
                </h3>
                <p className=" text-zinc-300 tracking-wider text-xl  lg:text-2xl mb-[15px]">
                  Grinding and Keeping it steady.
                </p>
                <p className=" text-zinc-300 tracking-wider text-lg md:text-xl pb-2">
                  let us support our own entrepreneurs
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          {/*  */}
        </Carousel>
      </div>

      {/* mobile carousel */}
      <div className=" md:hidden py-[2em]">
        <div
          className="image-scroller hide-scrollbar"
          onMouseEnter={handleInteraction}
          onMouseLeave={() => {
            timerRef.current = setInterval(handleAutoTransition, 4000);
          }}
        >
          <div
            className="image-scroller-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {heroData?.map((item, index) => (
              <div key={index} className="image-scroller-item">
                <div>
                  <div className="relative">
                    <a href={item.url}>
                      <img
                        src={item.image}
                        alt={`Image ${index}`}
                        className="rounded-xl"
                      />
                    </a>
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.2)] rounded-xl" />
                  </div>
                  <div className="px-[10px] bg-slate-900 rounded-md flex justify-end ">
                    <p className="py-[10px] text-sm text-[#02AEEE]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
