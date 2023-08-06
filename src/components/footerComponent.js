import React from "react";
import { FaGithub, FaGitlab, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export function FooterComponent() {
  return (
    <div className="flex flex-col pt-10 px-10 gap-8 bg-[#8AAAE5] ">
      <div className="flex justify-between items-center text-white text-left">
        <h1 className="text-md lg:text-4xl font-bold">
          Die As A Legend
          <br />
          Or
          <br />
          Die As A Trash
        </h1>
        <div className="flex text-[10px] lg:text-base ">
          <ul className="">
            <li className="font-semibold">Contact & My Social Media</li>
            <li className="flex gap-2 items-center">
              <BiLogoGmail size={20} /> mahesaabd7@gmail.com
            </li>
            <li className="flex gap-2 items-center">
              <FaWhatsapp size={20} /> +62-8122-0148-738
            </li>
            <li className="flex gap-2 items-center">
              <FaInstagram size={20} /> @abdmahesa
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between py-5 border-t-2 border-white text-xs lg:text-sm text-white">
        <p>&copy;2023 Mahesa Syawal Abdurahman</p>
        <div className="flex gap-1 lg:gap-3">
          <FaInstagram size={20} color="white" />
          <FaGithub size={20} color="white" />
          <FaGitlab size={20} color="white" />
        </div>
      </div>
    </div>
  );
}
