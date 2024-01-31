import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function DefaultModal({name, img, setYes}) {
    return (
        <div className="absolute bg-white top-[50%] left-[50%] w-[1000px] h-[600px] overflow-hidden rounded-2xl" style={{transform: "translate(-50%, -50%"}}>
            <div className="w-[90%] h-[90%] flex justify-center gap-8 items-center">
                <div className="photo w-[30%] h-[95%]">
                    <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="title flex flex-col gap-3 items-start justify-start w-80 h-[415px]">
                    <h1>{name}</h1> 
                    <h1>{name}</h1> 
                    <h1>{name}</h1> 
                    <h1>{name}</h1> 
                </div>
                <button className="fixed top-4 right-4" onClick={() => setYes(false)}><IoIosCloseCircleOutline size={30} /></button>
            </div>
        </div>
    )
}