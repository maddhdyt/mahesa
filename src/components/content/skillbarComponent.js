import React from "react";
import { FaLaravel, FaReact,FaHtml5,FaCss3Alt,FaJsSquare,FaBootstrap, } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"
export function SkillBarComponent() {
  return (
    <div className=" flex items-center flex-col w-full py-4 bg-slate-100 ">
      <h1 className="text-2xl font-extrabold">
        My Programming Language <span className="text-[#8AAAE5]">& Framework</span>  
      </h1>
      <div className="flex justify-between p-8 gap-24">
        <div className="flex gap- items-center flex-col text-[#8AAAE5]">
          <div className="flex justify-between">
            <FaHtml5 size={40}/>
            <FaCss3Alt size={40}/>
            <FaJsSquare size={40}/>
          </div>
          <p className="font-bold ">Basic Web Developer</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <FaBootstrap size={40} />
          <p className="font-bold ">Bootstrap</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <SiTailwindcss size={40} />
          <p className="font-bold ">Tailwind</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <FaLaravel size={40} />
          <p className="font-bold ">Laravel</p>
        </div>
        <div className="flex gap-1 items-center flex-col text-[#8AAAE5]">
          <FaReact size={40} />
          <p className="font-bold ">ReactJs</p>
        </div>
      </div>
    </div>
  );
}
