import React from "react";
import { FaLaravel, FaReact,FaHtml5,FaCss3Alt,FaJsSquare,FaBootstrap, } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"
export function SkillBarComponent() {
  return (
    <div className=" flex items-center flex-col w-full py-2 lg:py-4 bg-slate-100 ">
      <h1 className="text-lg lg:text-2xl font-extrabold">
        My Programming Language <span className="text-[#8AAAE5]">& Framework</span>  
      </h1>
      <div className="flex justify-between p-2 lg:p-8 gap-5 lg:gap-24 text-xs lg:text-base">
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5] ">
          <div className="flex flex-shrink justify-between ">
            <FaHtml5 className=" text-[30px] lg:text-[40px] "/>
            <FaCss3Alt className=" text-[30px] lg:text-[40px] "/>
            <FaJsSquare className=" text-[30px] lg:text-[40px] "/>
          </div>
          <p className="font-bold">Basic Web Developer</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <FaBootstrap className=" text-[30px] lg:text-[40px] " />
          <p className="font-bold ">Bootstrap</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <SiTailwindcss className=" text-[30px] lg:text-[40px] " />
          <p className="font-bold ">Tailwind</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <FaLaravel className=" text-[30px] lg:text-[40px] " />
          <p className="font-bold ">Laravel</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <FaReact className=" text-[30px] lg:text-[40px] " />
          <p className="font-bold ">ReactJs</p>
        </div>
      </div>
    </div>
  );
}
