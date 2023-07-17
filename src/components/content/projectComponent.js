import React, { useState } from "react";
import ImgSagara from "../../assets/image/sagaraPerspective.jpeg";
import ImgMovie from "../../assets/image/sagara.jpeg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export function ProjectComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectData = [
    {
      title: "Sagara Perspective",
      description:
        "  Melalui platform ini, pengguna dapat dengan mudah mengakses dan mengunduh buku-buku yang berisi hasil dari diskusi yang relevan dan bermanfaat. Website kami menyediakan beragam topik diskusi, mulai dari politik, lingkungan, pendidikan, hingga budaya, dengan tujuan untuk memfasilitasi pertukaran ide dan pemikiran yang berdampak positif.<br> Dengan antarmuka yang intuitif dan fitur pencarian yang canggih, kami berharap website kami menjadi sumber daya yangberharga bagi individu, akademisi, dan praktisi dalam upaya mereka untuk memperluas pengetahuan dan perspektif mereka. ",
      site: "https://mahesa.vercel.app/",
      repository: "https://github.com/MahesaSyawalA/mahesa ",
      image: `${ ImgSagara }` ,
    },
    {
      title: "MovSyle",
      description:
        "An online platform that allows users to search for information about movies from various genres, release years, actors, directors, and other elements. Users can utilize the user-friendly search feature to find movies of interest and view their synopses, reviews, and ratings. Additionally, the website also provides movie trailers and information about showtimes in nearby theaters or streaming platforms. With easy access to diverse information and recommendations provided by the movie search website, users can effortlessly explore the world of cinema and discover intriguing films to enjoy according to their preferences.",
      site: "https://movsyle.vercel.app/",
      repository: "https://github.com/MahesaSyawalA/Movie_App",
      image: `${ ImgMovie }`,
    },
    {
      title: "",
      description: "",
      site: "",
      repository: "",
      image: `${" "}`,
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projectData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSLide = () => {
    const isLastIndex = currentIndex === projectData.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  console.log(projectData[currentIndex].iamge)
  return (
    <div className=" flex flex-col w-full h-[600px] gap-5 px-52 py-10">
      <div className=" flex items-center h-full w-full gap-4 py-10 rounded-lg ">
        <button className=" text-[#8AAAE5]">
          <HiChevronLeft size={30} onClick={prevSlide} />
        </button>
        <div className="w-1/2 h-full flex flex-col py-9 justify-between bg-center ease-out duration-700  ">
          <h1 className=" text-left text-4xl font-black  ">
            {projectData[currentIndex].title}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: projectData[currentIndex].description,
            }}
            className=" text-gray-500 text-left text-sm"
          ></p>
          <div className="flex gap-4">
            <button className="border py-1 px-10 rounded-md bg-[#8AAAE5] text-white font-extrabold">
              Live Preview
            </button>
            <button className="border py-1 px-10 rounded-md text-[#8AAAE5] font-extrabold">
              GitLab Repo
            </button>
          </div>
        </div>
        <div
          className=" w-1/2 h-full bg-contain bg-no-repeat bg-center ease-out duration-700 "
          style={{
            backgroundImage: `url(${projectData[currentIndex].image})`,
          }}
        ></div>
        <button className=" text-[#8AAAE5]">
          <HiChevronRight size={30} onClick={nextSLide} />
        </button>
      </div>
    </div>
  );
}
