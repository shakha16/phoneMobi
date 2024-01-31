import React, { useState } from "react";
import DefaultModal from "./components/modal/DefaultModal";


export default function Phone({ id, img, name }) {
    const [yes, setYes] = useState(false)
    let body = document.querySelector("body")
    if(yes) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflowY = "scroll"
    }
    return (
        <>
            <div onClick={() => setYes(true)} className="phone__card cursor-pointer w-[300px] h-[350px] rounded-xl border-white border-2 flex flex-col overflow-hidden">
                <div className="img w-full h-[250px] overflow-hidden bg-[#ffff00]">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="text flex justify-center items-center">
                    <h1 className="text-[40px]">{name}</h1>
                </div>
            </div> 
            {yes && (
                <DefaultModal name={name} img={img} setYes={setYes} />
            )}
        </>
    )
}