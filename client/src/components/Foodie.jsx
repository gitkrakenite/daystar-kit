import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlinePhone,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Masonry from "react-masonry-css";
import "./masonry.css";

const Foodie = () => {
  const dummyFood = [
    {
      id: 1,
      title: "Njuguna's Place",
      location: "Off campus",
      choices:
        "Ugali, pilau, chapati, ndengu, beef, choma, andazi & tea, fried eggs",
      priceRange: " Ksh.100 - Ksh.200",
      likes: 50,
      dislikes: 20,
      picture:
        "https://media.istockphoto.com/id/1272199595/photo/ugali-with-goat-meat.jpg?b=1&s=612x612&w=0&k=20&c=ehbyO3wH80aY4dX-al3j9BTq1Eb3WR7eZtJmVWlO4ts=",
      phone: "0787 556347",
    },
    {
      id: 2,
      title: "Dowell's Place",
      location: "Off campus",
      choices: "Cakes, Cookies, Yoghurts",
      priceRange: " Ksh.100 - Ksh.300",
      likes: 50,
      dislikes: 20,
      picture:
        "https://images.pexels.com/photos/8970204/pexels-photo-8970204.jpeg?auto=compress&cs=tinysrgb&w=1600",
      phone: "0787 556347",
    },
    {
      id: 3,
      title: "Food Palace",
      location: "Off campus",
      choices: "Fries, Chicken, Pilau, Rice",
      priceRange: " Ksh.100 - Ksh.300",
      likes: 50,
      dislikes: 20,
      picture:
        "https://images.pexels.com/photos/4109234/pexels-photo-4109234.jpeg?auto=compress&cs=tinysrgb&w=1600",
      phone: "0787 556347",
    },
    {
      id: 4,
      title: "Pami Bakeries",
      location: "Off campus",
      choices: "Cakes, Samosas, Cookies, Yoghurts",
      priceRange: " Ksh.100 - Ksh.300",
      likes: 50,
      dislikes: 20,
      picture:
        "https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg?auto=compress&cs=tinysrgb&w=1600",
      phone: "0787 556347",
    },
  ];

  const breakpointColumnsObj = {
    default: 5,
    3000: 4,
    2000: 4,
    1500: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div id="foodie">
      {/* wrapper */}
      <div className="my-[2em]">
        <h2 className="text-2xl text-[#02AEEE] mb-[20px]">
          Best Food Spots In Athi
        </h2>

        <div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid "
            columnClassName="my-masonry-grid_column"
          >
            {/* {alert(records.length)} */}

            {dummyFood.map((item) => (
              <div key={item.id} className="bg-slate-900 rounded-lg">
                <div className="image-item rounded-lg">
                  <img
                    src={item.picture}
                    alt=""
                    className="w-full rounded-md max-h-[800px] object-cover"
                  />

                  <div className="mt-[10px] px-[6px] pb-[10px] ">
                    <div className="flex justify-between mb-[18px] items-center">
                      <div className="flex gap-[25px]">
                        <div className="flex items-center gap-[10px] hover:text-[#02AEEE] cursor-pointer">
                          <p>{item.likes}</p>
                          <AiOutlineLike className="text-2xl" />
                        </div>
                        <div className="flex items-center gap-[10px] hover:text-[#02AEEE] cursor-pointer">
                          <p>{item.dislikes}</p>
                          <AiOutlineDislike className="text-2xl" />
                        </div>
                      </div>
                      <div>
                        <a href={`tel:${item.phone}`}>
                          <AiOutlinePhone className="text-2xl text-[#02AEEE]" />
                        </a>
                      </div>
                    </div>

                    <p className="mb-2 ">{item.title}</p>
                    <div className="flex items-center gap-[10px] my-[10px] ">
                      <CiLocationOn className="text-2xl" />
                      <p className="">{item.location}</p>
                    </div>
                    <p className="mb-2 ">Price Range: {item.priceRange}</p>
                    {/* choices */}
                    <p>{item.choices}</p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Foodie;
