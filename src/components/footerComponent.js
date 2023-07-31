import React from "react";
import { FaGithub, FaGitlab, FaInstagram } from "react-icons/fa";
export function FooterComponent() {
  return (
    <div className="flex flex-col pt-10 px-10 gap-8 bg-[#8AAAE5] ">
      <div className="flex justify-between items-center text-white text-left">
        <h1 className="text-4xl font-bold">Die As A Legend
         <br/>
         Or
         <br/>
        Die As A Trash</h1>
      </div>
      <div className="flex items-center justify-between py-5 border-t-2 border-white text-sm text-white">
      <p>&copy;2023 Mahesa Syawal Abdurahman</p>
      <div className="flex gap-3">
        <FaInstagram size={20} color="white"/>
        <FaGithub size={20} color="white"/>
        <FaGitlab size={20} color="white"/>
      </div>
      </div>
    </div>
  );
}
