import React from "react";
import ProjectsIMG from "../Assets/projects.jpg";
import NewYear from "../Assets/newyeareve.png";
import weatherIMg from "../Assets/Weather.png";

function PortfolioSection() {
  return (
    <>
      <div className="text-center mt-10 font-extrabold text-4xl" id="Projects">
        Projects
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-3 lg:gap-5 xl:gap-5  m-3 mt-5 lg:m-5 xl:m-5">
        <div className="bg-gray-200 shadow-md rounded-lg  pb-6 flex flex-wrap items-start justify-center overflow-hidden transform transition   duration-150 hover:scale-95 cursor-pointer ">
          <img src={NewYear} alt="" />
          <div className="text-center">
            <h5 className="m-3 text-2xl font-bold">New Year's Eve</h5>
            <p className="m-3">CountDown Timer for the New Year's Eve</p>
            <div className="">
              <a
                href="https://trusting-feynman-10f5a7.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-white bg-MediumPurple px-4 py-1 rounded-full hover:bg-MaximumBluePurple"
              >
                Demo
              </a>

              {/* <a href="/#" assName="m-3">
                source code
              </a> */}
            </div>
          </div>
        </div>
        <div className="bg-gray-200 shadow-md rounded-lg  pb-6 flex flex-wrap items-center justify-center overflow-hidden transform transition duration-150 hover:scale-95 cursor-pointer ">
          <img src={weatherIMg} alt="" />
          <div className="text-center">
            <h5 className="m-3 text-2xl font-bold">Weather App</h5>
            <p className="m-3">
              retrieving weather data from an API by entering city name
            </p>
            <div className="">
              <a
                href="https://weather-73aab.web.app/"
                className=" text-white bg-MediumPurple px-4 py-1 rounded-full hover:bg-MaximumBluePurple"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>

              <a
                href="https://github.com/yousifr/weather"
                target="_blank"
                rel="noreferrer"
                className="m-3"
              >
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 shadow-md rounded-lg  pb-6 flex flex-wrap items-center justify-center overflow-hidden transform transition duration-150 hover:scale-95 cursor-pointer ">
          <img src={ProjectsIMG} alt="" />
          <div className="text-center">
            <h5 className="m-3 text-2xl font-bold">Project 3</h5>
            <p className="m-3">In Progress</p>
            <div className="">
              <a
                href="/#"
                className="text-white bg-MediumPurple px-4 py-1 rounded-full hover:bg-MaximumBluePurple"
              >
                Demo
              </a>

              <a href="/#" className="m-3">
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 shadow-md rounded-lg  pb-6 flex flex-wrap items-center justify-center overflow-hidden transform transition duration-150 hover:scale-95 cursor-pointer ">
          <img src={ProjectsIMG} alt="" />
          <div className="text-center">
            <h5 className="m-3 text-2xl font-bold">Project 4</h5>
            <p className="m-3">In Progress</p>
            <div className="">
              <a
                href="/#"
                className=" text-white bg-MediumPurple px-4 py-1 rounded-full hover:bg-MaximumBluePurple"
              >
                Demo
              </a>

              <a href="/#" className="m-3">
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 shadow-md rounded-lg  pb-6 flex flex-wrap items-center justify-center overflow-hidden transform transition duration-150 hover:scale-95 cursor-pointer ">
          <img src={ProjectsIMG} alt="" />
          <div className="text-center">
            <h5 className="m-3 text-2xl font-bold">Project 5</h5>
            <p className="m-3">In Progress</p>
            <div className="">
              <a
                href="/#"
                className="text-white bg-MediumPurple px-4 py-1 rounded-full hover:bg-MaximumBluePurple"
              >
                Demo
              </a>

              <a href="/#" className="m-3">
                source code
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 shadow-md rounded-lg  pb-6 flex flex-wrap items-center  justify-center overflow-hidden transform transition duration-150 hover:scale-95 cursor-pointer ">
          <img src={ProjectsIMG} alt="" />
          <div className="text-center">
            <h5 className="m-3 text-2xl font-bold">Project 6</h5>
            <p className="m-3">In Progress</p>
            <div className="">
              <a
                href="/#"
                className="text-white bg-MediumPurple px-4 py-1 rounded-full hover:bg-MaximumBluePurple"
              >
                Demo
              </a>

              <a href="/#" className="m-3">
                source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
