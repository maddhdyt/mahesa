import React from "react";

export function ProjectComponent() {
  return (
    <div className=" flex flex-col w-full h-[600px] gap-5 px-52 py-10">
      <div className=" flex h-full w-full px-6 py-10 rounded-lg  ">
        <div className="w-1/2 h-full flex flex-col gap-10  ">
          <h1 className=" text-left text-4xl font-black  ">
            Sagara Prespective
          </h1>
          <p className=" text-gray-500 text-left text-sm">
            {" "}
            Melalui platform ini, pengguna dapat dengan mudah mengakses dan
            mengunduh buku-buku yang berisi hasil dari diskusi yang relevan dan
            bermanfaat. Website kami menyediakan beragam topik diskusi, mulai
            dari politik, lingkungan, pendidikan, hingga budaya, dengan tujuan
            untuk memfasilitasi pertukaran ide dan pemikiran yang berdampak
            positif.
            <br/> 
            Dengan antarmuka yang intuitif dan fitur pencarian yang
            canggih, kami berharap website kami menjadi sumber daya yang
            berharga bagi individu, akademisi, dan praktisi dalam upaya mereka
            untuk memperluas pengetahuan dan perspektif mereka.{" "}
          </p>
          <div className="flex gap-4">
            <button className="border py-1 px-10 rounded-md bg-[#8AAAE5] text-white font-extrabold">Live Preview</button>
            <button className="border py-1 px-10 rounded-md text-[#8AAAE5] font-extrabold">GitLab Repo</button>
          </div>
        </div>
        <div className=" w-1/2 h-full">HALLO</div>
      </div>
    </div>
  );
}
