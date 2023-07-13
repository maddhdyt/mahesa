import React from "react";

export function HeaderComponent(){
    return(
        <>
        <div className="fixed z-10 flex px-10 py-5 justify-between items-center w-full ">
            <div className=" text-[#8AAAE5] text-3xl font-bold" > MahesaSyawalA </div>
            <div className="flex justify-between gap-36 items-center" >
                <ul className="flex gap-8 text-gray-400">
                    <li className="text-black">Home</li>
                    <li>Product</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>About Us</li>
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