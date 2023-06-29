import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlinePhone } from "react-icons/ai";

const Accomodation = () => {
  const dummyRentals = [
    {
      id: 1,
      title: "Heri Hostel",
      careTaker: "Joshua Okwema",
      rent: "Ksh. 11,000",
      mainPic:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",
      secPic:
        "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600",
      thirdPic:
        "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600",
      phone: "0756 76676",
    },
    {
      id: 2,
      title: "Kryptons Hostel",
      careTaker: "Joshua Okwema",
      rent: "Ksh. 11,000",
      mainPic:
        "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1600",
      secPic:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600",

      thirdPic:
        "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600",
      phone: "0756 76676",
    },
  ];

  return (
    <div id="accommodation" className="mx-auto p-4">
      <Carousel
        showArrows={window.innerWidth > 768}
        emulateTouch={window.innerWidth <= 768}
        className="w-full justify-center items-center"
      >
        {dummyRentals?.map((image) => (
          <div key={image.id}>
            <div className="w-full flex justify-around mb-[10px] gap-[20px] flex-wrap">
              <p>{image.title}</p>
              <p>{image.rent}</p>
              <a
                href={`tel:${image.phone}`}
                className="flex items-center gap-[5px]"
              >
                <AiOutlinePhone className="text-2xl text-[#02AEEE]" />
                <span>Call Us</span>
              </a>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full ">
                <div className="flex flex-wrap justify-center gap-[10px] mb-[10px]">
                  <img
                    src={image.mainPic}
                    alt={image.title}
                    className="h-[300px] w-auto rounded-md"
                  />

                  <img
                    src={image.secPic}
                    alt={image.title}
                    className="h-[300px] w-auto rounded-md"
                  />
                  <img
                    src={image.thirdPic}
                    alt={image.title}
                    className="h-[300px] w-auto rounded-md"
                  />
                </div>
                {/* <div className="flex gap-[20px] justify-center">
               
              </div> */}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Accomodation;
