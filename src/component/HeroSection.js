import React from "react";
import chair from "../Assets/chair.png";
import hero from "../Assets/background.jpg";
import myPDF from "../Assets/Yousif Ismail (2).pdf";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <>
      <div
        className=" h-screen  w-screen flex flex-col justify-center items-center "
        id="Home"
      >
        <img
          className="myImage  bg-cover h-screen w-screen bg-center bg-no-repeat   -z-30
           filter blur-sm  
           "
          src={hero}
          alt="HeroSection"
        />
        <div className="flex justify-center  items-center bg-GhostWhite absolute  w-11/12 lg:w-9/12 lg:h-4/6    h-5/6 mt-5 bg-opacity-60 rounded-xl px-10 lg:px-2 ">
          <div className="lg:flex lg:flex-row-reverse ">
            <img
              src={chair}
              alt="man with a chair"
              className="w-96  my-8 h-2/4 lg:ml-24 "
            />

            <div>
              <div className=" text-gray-700 text-3xl  leading-normal font-bold  text-center  pb-16  lg:text-5xl lg:leading-loose">
                <Typewriter
                  options={{
                    strings: [
                      `Hey, <br /> I'm YOUSIF <br /> Front-End Developer`,
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(
                        "Hey, <br /> I'm YOUSIF <br /> Front-End Developer"
                      )

                      .changeDeleteSpeed(10)
                      .pauseFor(10)
                      .deleteAll()
                      .start();
                  }}
                />

                {/* Hey, <br /> I'm YOUSIF <br /> Front-End Developer */}
              </div>
              <div className="flex justify-center items-center lg:items-end">
                <a
                  href={myPDF}
                  className="bg-MediumPurple py-3 px-6 rounded-full items-center justify-center font-bold text-white "
                  download="CV.pdf"
                >
                  Download CV
                </a>
                <a
                  href="#Contact"
                  className="bg-MediumPurple px-8 py-3 rounded-full mx-2 font-bold text-white"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
          {/* <div className=" ">
            <img src={chair} alt="man with a chair" className="w-96 h-84" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
