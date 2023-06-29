import { useState } from "react";

// import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState("");
  return (
    <div>
      {/* desktop navbar */}
      <div
        className=" hidden xl:block py-[25px] top-0 left-0 fixed w-full px-[2em]  xl:px-[5em] "
        style={{
          background: "rgba(12, 7, 7, 0.9)",
          backdropFilter: "blur(4px)",
          zIndex: 2,
        }}
      >
        {/* desktop navbar */}
        <div className="flex justify-between items-center">
          <div>
            <a href="#home">
              <h2
                className="text-3xl text-[#02AEEE]"
                style={{ fontWeight: 700 }}
              >
                D-PACK
              </h2>
            </a>
          </div>
          <div>
            <ul className="flex gap-[40px]">
              <li>
                <a
                  href="#transport"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Transport
                </a>
              </li>
              <li>
                <a
                  href="#foodie"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Foodie
                </a>
              </li>
              <li>
                <a
                  href="#accommodation"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Accommodation
                </a>
              </li>
              <li>
                <a
                  href="#fun"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Fun
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Social
                </a>
              </li>
              <li>
                <a
                  href="#hustle"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Hustle
                </a>
              </li>
              <li>
                <a
                  href="#opportunities"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Opportunities
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#trending"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Trending
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {!toggle && (
        <div
          className="xl:hidden h-[8vh] top-0 left-0 flex justify-between items-center w-full fixed px-[2em] py-[1em]"
          style={{
            background: "rgba(12, 7, 7, 0.9)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          <div>
            <a href="#home">
              <h2
                className="text-3xl text-[#02AEEE]"
                style={{ fontWeight: 700 }}
              >
                D-PACK
              </h2>
            </a>
          </div>
          <div>
            <AiOutlineMenu
              className="text-3xl cursor-pointer"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      )}

      {toggle && (
        <div
          className="xl:hidden h-[100vh] top-0 left-0  w-full fixed px-[1em]"
          style={{
            background: "rgba(12, 7, 7, 0.6)",
            backdropFilter: "blur(3px)",
            zIndex: 2,
          }}
        >
          <div className="flex justify-between items-center pt-[10px]">
            <div>
              <a href="#home">
                <h2
                  className="text-3xl text-[#02AEEE]"
                  style={{ fontWeight: 700 }}
                >
                  D-PACK
                </h2>
              </a>
            </div>
            <div>
              <AiOutlineClose
                className="text-4xl cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>
          </div>
          {/* links */}
          <div className="pt-[1em]">
            <ul className="flex flex-col my-[1em] gap-[20px] text-end">
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#transport"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Transport
                </a>
              </li>
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#foodie"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Foodie
                </a>
              </li>

              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#accommodation"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Accommodation
                </a>
              </li>
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#fun"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Fun
                </a>
              </li>
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#social"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Social
                </a>
              </li>
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#hustle"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Hustle
                </a>
              </li>
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#opportunities"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Opportunities
                </a>
              </li>
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#reviews"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Reviews
                </a>
              </li>
              <li
                className="pb-[5px] text-lg pr-[10px]"
                style={{ borderBottom: "1px solid #535353" }}
                onClick={() => setToggle(false)}
              >
                <a
                  href="#trending"
                  className="hover:text-[#02AEEE] text-inherit no-underline"
                >
                  Trending
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Navbar;
