import React from "react";
import { FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
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
          <ul className="flex flex-col gap-1">
            <li className="font-bold text-lg">Contact & My Social Media</li>
            <li className="flex gap-2 items-center cursor-pointer" onClick={() =>{ window.location.href = 'mailto:mahesaabd7@gmail.com' }}>
              <BiLogoGmail size={20} /> mahesaabd7@gmail.com
            </li>
            <li className="flex gap-2 items-center cursor-pointer" onClick={() =>{ window.location.href = ' https://wa.me/+6281220148738' }} >
              <FaWhatsapp size={20} /> +62-8122-0148-738
            </li>
            <li className="flex gap-2 items-center cursor-pointer" onClick={() =>{ window.location.href = 'https://www.instagram.com/yojusinici/' }}>
              <FaInstagram size={20} /> @yojusinici
            </li>
            <li className="flex gap-2 items-center cursor-pointer" onClick={() =>{ window.location.href = 'https://www.linkedin.com/in/mahesa-syawal-abdurahman-872357287/' }}>
              <FaLinkedin size={20} /> Mahesa Syawal Abdurahman
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between py-5 border-t-2 border-white text-xs lg:text-sm text-white">
        <p>&copy;2023 Mahesa Syawal Abdurahman</p>
        <div className="flex gap-1 lg:gap-3">
          <FaGithub className="cursor-pointer" size={20} color="white" onClick={() =>{ window.location.href = 'https://github.com/MahesaSyawalA' }}/>
          <FaGitlab className="cursor-pointer" size={20} color="white" onClick={() =>{ window.location.href = 'https://gitlab.com/MahesaSyawalA' }}/>
        </div>
      </div>
    </div>
  );
}
