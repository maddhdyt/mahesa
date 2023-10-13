import React, { useState } from "react";
import ImgSagara from "../../assets/image/sagaraPerspective.jpeg";
import sagara from "../../assets/image/sagara.jpeg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export function ProjectComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectData = [
    {
      title: "Sagara Perspective",
      description:
        "  Through this platform, users can easily access and download books containing relevant and useful discussion results. Our website provides a variety of discussion topics, ranging from politics, the environment, education, to culture, with the aim of facilitating the exchange of ideas and thoughts that have a positive impact.<br> With an intuitive interface and sophisticated search features, we hope our website can become a A valuable resource for individuals, academics, and practitioners in expanding their knowledge and perspectives.",
      site: "https://fgd-sagara.vercel.app/",
      repository: "https://github.com/MahesaSyawalA/mahesa ",
      image: `${ImgSagara}`,
    },
    {
      title: "Sagara Hackathon",
      description:
        "I've developed a hackathon management website that allows teams and participants to register, collaborate, and join hackathons easily. In this project I learned a lot about functions to make things easier for users, became a bug hunter when tested by QA and fixed existing bugs and technical errors.<br> Since the visibility of this project is private, I can't show the code directly ",
      site: "",
      repository: "",
      image: `${sagara} `,
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

  return (
    <div
      id="project"
      className=" hidden lg:flex flex-col w-full h-[700px] px-52 lg:pt-[100px] lg:pb-10"
    >
      <div className=" flex items-end justify-center h-[10%] text-5xl font-extrabold ">
        {" "}
        Example Project
      </div>
      <div className=" flex items-center h-[80%] w-full gap-4 pb-10 rounded-lg ">
        <button className=" text-[#8AAAE5]">
          <HiChevronLeft size={30} onClick={prevSlide} />
        </button>
        <div className="w-1/2 h-full flex flex-col py-9 justify-between bg-center ease-out duration-700  ">
          <h1 className=" text-left text-4xl font-black text-[#8AAAE5] ">
            {projectData[currentIndex].title}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: projectData[currentIndex].description,
            }}
            className=" text-gray-500 text-left text-sm"
          ></p>
          <div className="flex gap-4">
            <button
              disabled={projectData[currentIndex].site === "" ? true : false}
              className="border py-1 px-10 rounded-md bg-[#8AAAE5] text-white font-extrabold"
              onClick={() => {
                if (projectData[currentIndex].site !== "") {
                  window.location.href = projectData[currentIndex].site;
                }
              }}
            >
              Live Preview
            </button>
            <button
              disabled={
                projectData[currentIndex].repository === "" ? true : false
              }
              className="border py-1 px-8 rounded-md text-[#8AAAE5] font-extrabold"
              onClick={() => {
                if (projectData[currentIndex].repository !== "") {
                  window.location.href = projectData[currentIndex].repository;
                }
              }}
            >
              Git Repository
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
