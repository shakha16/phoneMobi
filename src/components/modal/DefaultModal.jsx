import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function DefaultModal({ item, setYes }) {
    return (
        <div key={item.id} className="absolute bg-white top-[50%] left-[50%] w-[1000px] h-[600px] overflow-hidden rounded-2xl flex items-center" style={{ transform: "translate(-50%, -50%" }}>
            <div className="w-[90%] h-[90%] flex justify-center gap-8 items-start">
                <div className="photo w-[30%] h-[95%]">
                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="title flex flex-col gap-3 items-start justify-start w-80 h-[415px]">
                    <h1 className="text-[40px] w-[500px]">{item.name}</h1>
                    <div className="flex items-center gap-3">
                        <span className="text-[20px] bg-slate-300 rounded-md p-1">Цвета:</span>
                        {
                            item.color.map(item => (
                                <div className="w-6 h-6 rounded-full border border-black" style={{ backgroundColor: item.name }}></div>
                            ))
                        }
                    </div>
                    <div className="flex items-center gap-10 w-[500px] mt-5 mb-5">
                        <div className="flex flex-col items-start gap-3">
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Дисплей:</span> <span className="text-[15px] underline">{item.display}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Чип:</span> <span className="text-[15px] underline">{item.chip}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Камера:</span> <span className="text-[15px] underline">{item.camera}</span></h1>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Батарея:</span> <span className="text-[15px] underline">{item.batery}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">OS:</span> <span className="text-[15px] underline">{item.os}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Вес:</span> <span className="text-[15px] underline">{item.ves}</span></h1>
                        </div>
                    </div>
                    <h1 className="flex justify-center items-center gap-4 w-[510px]"><span className="text-[20px] bg-red-700 text-white rounded-md p-1">Цена:</span></h1>
                    <div className="flex gap-10">
                        <h1>6-ой {item.sixMonth}</h1>
                        <h1>12-ой {item.twelveMonth}</h1>
                    </div>
                    <div className="w-[300px] flex flex-col gap-4">
                        {
                            item.memory.map(item => (
                                <div className="flex items-center justify-between">
                                    <h1>{item.name}</h1>
                                    <h1>{item.price}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button className="fixed top-4 right-4" onClick={() => setYes(false)}><IoIosCloseCircleOutline size={30} /></button>
            </div>
        </div>
    )
}