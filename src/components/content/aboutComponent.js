import React from "react";
import Profile from "../../assets/image/gambar2.png";
import Network from "../../assets/icon/network.png";
import TeamWork from "../../assets/icon/teamwork.png";
import Adaptibility from "../../assets/icon/adaptibility.png";
import Creativity from "../../assets/icon/creativity.png";
import Problem from "../../assets/icon/problem.png";
import Learning from "../../assets/icon/learning.png";
export function AboutComponent() {
  const experience = [
    {
      time: "MEI 2023 - Present",
      position: "Front-End Developer",
      descripion: "",
      company: "Sagara Technology",
    },
    {
      time: " OKT 2022 - MAR 2023",
      position: "Fullstack Developer",
      descripion: "",
      company: "PT.Basic Teknologi",
    },
  ];

  return (
    <div className=" flex flex-col lg:flex-row justify-center w-full h-[300px] lg:h-[680px] px-9 lg:px-56 lg:py-14">
      <div className="-z-10 -left-20 mt-96 rounded-full blur-3xl bg-gradient-to-r from-[#8AAAE5]  absolute w-[30%] h-[40%] "></div>
      <div className=" flex flex-row items-center lg:items-start lg:flex-col w-full lg:w-1/2 h-1/2 lg:h-full lg:py-10">
        <div className=" justify-center flex flex-col h-[45%] w-[75%] gap-4">
          <h1 className="text-xl lg:text-6xl text-left font-bold">
            {" "}
            Hii
            <br />
            <span className="text-[#8AAAE5] " > I'm Mahesa </span>
          </h1>
          <p className="text-left text-[7px] lg:text-sm ">
            &nbsp; --Like a code artist, I always strive to discover new ways to
            align technological innovations with user needs, resulting in a
            remarkable positive impact in crafting a more beautiful and
            inspiring virtual world.
          </p>
        </div>
        <div
          className=" z-0 ms-8 bg-contain bg-center rounded-full bg-no-repeat w-[60%] h-[55%]"
          style={{
            backgroundImage: `url(${Profile})`,
          }}
        ></div>
      </div>
      <div className=" flex flex-row-reverse lg:flex-col w-full lg:w-1/2 h-1/2 lg:h-full">
        <div className=" flex flex-col gap-1 lg:gap-3 h-1/2 w-1/2 lg:w-full ">
          <h3 className=" text-left text-base lg:text-4xl font-bold text-[#8AAAE5] ">Experience</h3>
          {experience.map((item, i) => (
            <div
              key={i}
              className="border-t lg:border-t-2 border-black flex gap-2 lg:gap-4 py-1 lg:py-4 w-full "
            >
              <div className="flex flex-col w-[50%] lg:w-[35%] text-left ">
                <h3 className="text-[7px] lg:text-sm font-bold "> {item.company} </h3>
                <p className=" flex text-[7px] lg:text-xs"> {item.time} </p>
              </div>
              <div className="flex-col">
                <h3 className=" text-[7px] lg:text-base font-bold "> {item.position} </h3>
                <p className=" text-xs"> {item.descripion} </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex-col w-1/2 lg:w-full pr-5 lg:pr-0 h-full lg:h-1/2 ">
          <div className=" flex justify-between items-center h-1/3 lg:h-1/2">
            <div className="flex flex-col justify-center items-center w-1/4 h-[60%] lg:h-[80%] ">
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-1/2"
                style={{
                  backgroundImage: `url(${TeamWork})`,
                }}
              ></div>
              <p className="text-[6px] lg:text-lg font-bold ">Teamwork</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 h-[60%] lg:h-[80%] ">
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-1/2"
                style={{
                  backgroundImage: `url(${Adaptibility})`,
                }}
              ></div>
              <p className="text-[6px] lg:text-lg font-bold ">Adaptibility</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 h-[60%] lg:h-[80%]">
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-1/2"
                style={{
                  backgroundImage: `url(${Network})`,
                }}
              ></div>
              <p className="text-[6px] lg:text-lg font-bold ">Comunication</p>
            </div>
          </div>
          <div className="flex justify-between items-center h-1/3 lg:h-1/2">
            <div className="flex flex-col justify-center items-center w-1/4 h-[60%] lg:h-[80%]">
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-1/2"
                style={{
                  backgroundImage: `url(${Creativity})`,
                }}
              ></div>
              <p className="text-[6px] lg:text-lg font-bold ">Creativity</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 h-[60%] lg:h-[80%]">
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-1/2"
                style={{
                  backgroundImage: `url(${Problem})`,
                }}
              ></div>
              <p className="text-[6px] lg:text-lg font-bold ">Problem Solving</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 h-[60%] lg:h-[80%]">
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-1/2"
                style={{
                  backgroundImage: `url(${Learning})`,
                }}
              ></div>
              <p className="text-[6px] lg:text-lg font-bold ">Learning Mindset</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
