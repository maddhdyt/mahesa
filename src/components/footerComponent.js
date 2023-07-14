import React from "react";
import Image from "../assets/image/gambarFooter.png";
import { FaGithub, FaGitlab, FaInstagram } from "react-icons/fa";
export function FooterComponent() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-[400px] bg-gradient-to-t from-slate-200 via-slate-100">
      <div className="flex w-full h-[68%]">
        <div className=" flex w-[40%] h-full items-center text-left text- text-[#8AAAE5] font-bold px-7  ">
          I would like to express my sincere gratitude for visiting my website
          profile. Your presence is truly appreciated, and I am thankful for the
          time you have taken to explore my work.
          <br /> It means a lot to me that you have shown interest and have
          taken the opportunity to get to know me better. Your support and
          engagement are invaluable, and I am truly grateful for your visit.
          Thank you once again for stopping by, and I hope you found my website
          informative and enjoyable.
        </div>
        <div className=" rounded-full w-[20%] h-full bg-gradient-to-t from-slate-100  ">
          <div
            className="rounded-full w-[100%] h-[100%] bg-cover bg-no-repeat bg-top "
            style={{
              backgroundImage: `url(${Image})`,
            }}
          ></div>
        </div>
        <div className="flex flex-row justify-between px-10 py-16 text-left text-[#8AAAE5]  w-[40%] h-full ">
          <ul>
            <li className="font-bold">Content</li>
            <li>My Journey</li>
            <li>Hero</li>
            <li>My Skills</li>
            <li>My Project</li>
          </ul>
          <ul>
            <li className="font-bold">Resource</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>Components</li>
          </ul>
          <ul>
            <li className="font-bold">Resource</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>Components</li>
          </ul>
        </div>
      </div>
      <div className=" flex items-end w-full h-[30%]">
        <div className=" w-[40%] h-[40%] rounded-tr-full bg-[#8AAAE5]"></div>
        <div className=" flex  w-[20%] h-full gap-4 items-center justify-center text-[#8AAAE5]">
          <FaInstagram size={30} />
          <FaGithub size={30} />
          <FaGitlab size={30} />
        </div>
        <div className=" w-[40%] h-[40%] rounded-tl-full bg-[#8AAAE5]"></div>
      </div>
    </div>
  );
}
