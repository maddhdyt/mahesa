import React from "react";

export function HeroComponent({Gambar1}) {
  return (
    <div className=" border flex justify-center items-center w-full h-[416px] lg:h-[760px] lg:pt-20">
      <div className="absolute w-[50%] h-[100%] bg-gradient-to-br from-[#8AAAE5] bg-opacity-0 blur-3xl rounded-full -top-[20%] -left-[40%] "></div>
      <div className="hidden absolute -z-30 w-[80%] h-[60%] lg:h-[100%] bg-gradient-to-br from-[#8AAAE5] bg-opacity-0 blur-3xl rounded-full -bottom-[50%] -right-[75%] "></div>
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center h-[80%] w-[90%] gap-2 lg:gap-10 pt-5 lg:pt-0 ">
        <div className=" bg-gradient-to-br from-[#8AAAE5] bg-opacity-0 w-[45%] h-[85%]  lg:w-[35%] lg:h-[78%] rounded-full ">
          <div className=" w-[100%] h-[100%] bg-cover bg-center rounded-full "
        style={{
          backgroundImage: `url(${Gambar1})`
        }}></div>

        </div>
        <div className="flex flex-col gap-2 lg:gap-10 pt-4 w-full lg:w-[50%]  lg:h-full  lg:p-0 text-center lg:text-left px-2">
          <h2 className="text-2xl lg:text-7xl font-extrabold">
            Unveiling the Essence of Me My Personal Profile Journey
          </h2>
          <p className=" text-[10px] lg:text-base font-semibold px lg:pr-24">
            Connect with my soul and spirit through the personal experiences I
            share in this profile. Come explore the enlightening stories,
            inspiring impressions, and dreams I'm pursuing together.
          </p>
        </div>
      </div>
    </div>
  );
}
