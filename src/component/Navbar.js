import React, { useState } from "react";
// import menu from "../Assets/menu.svg";
import { Link } from "react-scroll";

import linkedin from "../Assets/linkedin.png";
// import { Link } from "react-router-dom";
function Navbar() {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    // setisSideMenuOpen(!isSideMenuOpen);
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };
  return (
    <>
      <nav className="">
        <div className="container fixed top-0 left-0 text-black bg-transparent  flex justify-between pt-7 pb-1 z-40 lg:pt-10   ">
          <div className="flex  mx-5 lg:mx-24 text-MediumPurple   text-5xl -mt-4">
            <a href="#Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 lg:h-14 lg:w-14 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </a>
          </div>

          <div>
            <ul className=" lg:flex mx-20 hidden">
              <li className="transform  hover:scale-90 transition duration-75">
                {/* <div className="mx-8  bg-MediumPurple px-5 py-1 rounded-full  hover:cursor-pointer text-white "> */}
                <Link
                  className="mx-8  bg-MediumPurple px-5 py-1 rounded-full  hover:cursor-pointer cursor-pointer text-white "
                  to="Home"
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
                {/* </div> */}
              </li>
              <li className="transform  hover:scale-90 transition duration-75">
                <Link
                  className="mx-8 bg-MediumPurple px-5 py-1 rounded-full hover:cursor-pointer text-white cursor-pointer"
                  to="About"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>

              <li className="transform  hover:scale-90 transition duration-75">
                <Link
                  className="mx-8 bg-MediumPurple px-5 py-1 rounded-full  hover:cursor-pointer text-white cursor-pointer "
                  to="Projects"
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="transform  hover:scale-90 transition duration-75">
                <Link
                  className="mx-8 bg-MediumPurple px-5 py-1 rounded-full  hover:cursor-pointer text-white cursor-pointer "
                  to="Contact"
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yousif-ismail-81576a158/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} className="h-6 w-6 " alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={() => {
            showSideMenu();
          }}
          className=" lg:hidden top-4 fixed  right-5 z-50 "
        >
          {isSideMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-MediumPurple"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        {/* {SideMenu()} */}
        {isSideMenuOpen ? SideMenu() : ""}
      </nav>
    </>
  );
}

function SideMenu() {
  return (
    <div className=" fixed  flex justify-center items-center  top-0 right-0 w-screen h-2/4 bg-MediumPurple rounded-xl z-40 lg:hidden">
      <ul className="text-white text-4xl text-center  ">
        <li className="p-3">
          <a href="#Home">Home</a>
        </li>
        <li className="p-3">
          <a href="#About">About</a>{" "}
        </li>
        <li className="p-3">
          <a href="#Projects">Projects</a>{" "}
        </li>
        <li className="p-3">
          <a href="#Contact">Contact</a>{" "}
        </li>
        <li className="p-3 flex justify-center  ">
          <a
            href="https://www.linkedin.com/in/yousif-ismail-81576a158/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="h-6 w-6  " alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
