import React from "react";
import { FaGitlab, FaGithub, FaNpm } from "react-icons/fa";
import { GoPackageDependencies } from "react-icons/go";
import {GiWaterfall} from "react-icons/gi";
import {DiScrum} from "react-icons/di";
export function OtherComponent() {
  return (
    <div className="flex items-center flex-col w-full gap-10 ">
      <div className="flex flex-grow items-center justify-between ">
        <h1 className="text-3xl text-left w-[20%] font-extrabold">
          {" "}
          Other
          <br /> My Skills
        </h1>
        <p className="text-left text-md font-bold text-[#8AAAE5]">
          Another useful skill in the field of web development, which I learned
          during fieldwork and internships
        </p>
      </div>
      <div className="flex w-[60%] justify-between ">
        <div className="flex flex-col gap- w-[30%] border border-[#8AAAE5] p-5 rounded-md">
          <div className="flex justify-center items-center gap-10 p-5 text-[#8AAAE5]">
            <FaGithub size={40} />
            <FaGitlab size={40} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold ">Version Control</h3>
            <p className="text-[#8AAAE5]">
              I can use version control systems, git is the tool that I use.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap- w-[30%] border border-[#8AAAE5] p-5 rounded-md">
          <div className="flex justify-center items-center gap-10 p-5 text-[#8AAAE5]">
            <GiWaterfall size={40} />
            <DiScrum size={40} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold ">
              Software Development Methodology
            </h3>
            <p className="text-[#8AAAE5]">
              I gain knowledge and application of several software development
              methodologies such as waterfall and agile (scrum).
            </p>
          </div>
        </div>
        <div className="flex flex-col  w-[30%] border border-[#8AAAE5] p-5 rounded-md">
          <div className="flex justify-center items-center gap-10 p-5 text-[#8AAAE5]">
            <FaNpm size={40} />
            <GoPackageDependencies size={40} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-lg font-bold ">NPM & Depedencies</h3>
            <p className="text-[#8AAAE5] text-clip overflow-hidden">
              I have a good understanding of NPM. I also understand and can
              apply some of the dependencies which can be used for web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
