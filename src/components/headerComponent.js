import React, { useState } from "react";

export function HeaderComponent({status}){
    const [active,setActive] = useState('')
    function Scroll(target){
        setActive(target)
        const targetDiv = document.getElementById(target)
        targetDiv.scrollIntoView({behavior: 'smooth', block: 'center' })
    }

    return(
        <>
        <div className={`fixed z-10 flex px-5 lg:px-12 py-2 lg:py-5 justify-between items-center w-full ease-in-out duration-300 ${ status ? "bg-white" : "bg-none"}`} >
            <div className=" text-[#8AAAE5] text- lg:text-3xl font-bold" > MahesaSyawalA </div>
            <div className="flex justify-between gap-36 items-center" >
                <ul className="hidden lg:flex  gap-8 text-[#8AAAE5]">
                    <li
                     className={`${active === 'hero' ? 'font-bold': ''}`}
                    onClick={() => Scroll('hero')}
                     >Hero</li>
                    <li
                    className={`${active === 'about' ? 'font-bold': ''}`}
                    onClick={() => Scroll('about')}
                    >About Me</li>
                    <li
                    className={`${active === 'project' ? 'font-bold': ''}`}
                    onClick={() => Scroll('project')}
                    >Portofolio</li>
                    <li
                    className={`${active === 'other' ? 'font-bold': ''}`}
                    onClick={() => Scroll('other')}
                    >Other Skils</li>
                </ul>
                <ul className="flex gap-5 items-center">
                    <li
                    onClick={()=> window.location.assign('https://github.com/MahesaSyawalA')} 
                    className="cursor-pointer p-2 rounded-lg border text-gray-400 hover:bg-slate-200"
                    >GitHub</li>
                    <li
                    onClick={()=> window.location.assign('https://gitlab.com/MahesaSyawalA')} 
                    className="p-2 bg-[#8aaae5] text-white rounded-lg cursor-pointer hover:bg-[#7b97cc]"
                    >GitLab</li> 
                </ul>
            </div>
        </div>
        </>
    )
}