import React, { useState } from "react";
import DefaultModal from "./components/modal/DefaultModal";


export default function Phone({ item }) {
    const [yes, setYes] = useState(false)
    let body = document.querySelector("body")
    if (yes) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflowY = "scroll"
    }
    return (
        <>
            <div key={item.id} onClick={() => setYes(true)} className="phone__card cursor-pointer w-[300px] h-[350px] rounded-xl border-black border-2 flex flex-col overflow-hidden">
                <div className="img w-full overflow-hidden bg-[#ffff00] h-[80%]">
                    <img src={item.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="text flex justify-center items-center h-[20%]">
                    <h1 className="text-[30px]">{item.name}</h1>
                </div>
            </div> 
            {yes && (
                <DefaultModal item={item} setYes={setYes} />
            )}
        </>
    )
}