import React from "react";

export function HeaderComponent({status}){
    return(
        <>
        <div className={`fixed z-10 flex px-5 lg:px-12 py-2 lg:py-5 justify-between items-center w-full ease-in-out duration-300 ${ status ? "bg-white" : "bg-none"}`} >
            <div className=" text-[#8AAAE5] text- lg:text-3xl font-bold" > MahesaSyawalA </div>
            <div className="flex justify-between gap-36 items-center" >
                <ul className="hidden lg:flex  gap-8 text-gray-400">
                    <li className="text-black">Hero</li>
                    <li>About Me</li>
                    <li>Portofolio</li>
                    <li>Other Skils</li>
                </ul>
                <ul className="flex gap-5 items-center">
                    <li className="text-gray-400">Login</li>
                    <li className="p-2 bg-[#8AAAE5] text-white rounded-lg ">Sign Up</li>
                </ul>
            </div>
        </div>
        </>
    )
}