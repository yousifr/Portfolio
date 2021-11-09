import React from "react";
import img from "../Assets/aboutimg1.jpg";

function AboutSection() {
  return (
    <>
      <div
        className="text-center text-4xl bg-GhostWhite pt-5 font-bold"
        id="About"
      >
        About
      </div>
      <div className="bg-GhostWhite  h-2/4 w-screen flex flex-wrap items-center justify-center text-black  lg:pb-12 xl:pb-12 lg:pt-6 xl:pt-6">
        <img
          src={img}
          className="h-40 w-40 rounded-full  shadow-2xl  border-AntiqueWhite border-4 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
          alt=""
        />

        <div className="box-content   m-5 text-center   text-xl w-96  lg:text-justify xl:text-justify lg:mx-16 ">
          My name is Yousif Ismail I'm a Front End Developer based in Erbil. I
          describe myself as a passionate developer who loves coding, open
          source, and the web platform. Aside from my job, I like to create and
          contribute to open source projects. That helps me to learn a ton of
          new stuff, grow as a developer and support other open source projects.
        </div>
      </div>
    </>
  );
}

export default AboutSection;
