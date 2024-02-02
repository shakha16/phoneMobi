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
                    <h1 className="text-[40px]">{item.name}</h1>
                    <h1 className="flex items-center">
                        <span className="text-[20px] bg-slate-300 rounded-md p-1">Память:</span>ㅤ
                        <div className="flex gap-3">
                            {
                                item.memory.map(item => (
                                    <span className="text-[18px] underline bg-lime-800 rounded-md p-1 text-white">{item.name}</span>
                                ))
                            }
                        </div>
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="text-[20px] bg-slate-300 rounded-md p-1">Цвета:</span>
                        {
                            item.color.map(item => (
                                <div className="w-4 h-4 rounded-full border border-black" style={{ backgroundColor: item.name }}></div>
                            ))
                        }
                    </div>
                    <div className="flex items-center gap-10 w-[500px] mt-5 mb-5">
                        <div className="flex flex-col items-start gap-3">
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Дисплей:</span> <span className="text-[17px] underline">{item.display}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Чип:</span> <span className="text-[18px] underline">{item.chip}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Камера:</span> <span className="text-[18px] underline">{item.camera}</span></h1>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Батарея:</span> <span className="text-[18px] underline">{item.batery}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">OS:</span> <span className="text-[18px] underline">{item.os}</span></h1>
                            <h1><span className="text-[20px] bg-violet-700 text-white rounded-md p-1">Вес:</span> <span className="text-[18px] underline">{item.ves}</span></h1>
                        </div>
                    </div>
                    <div className="flex items-center w-[532px] gap-10">
                        <h1 className="flex gap-4"><span className="text-[20px] bg-red-700 text-white rounded-md p-1">Месяц:</span> <span className="flex flex-col items-start"><span>6-ой: <span className="w-1 underline">{item.sixMonth}</span></span><span>12-ой: <span className="w-1 underline">{item.twelfMonth}</span></span></span></h1>
                        <h1><span className="text-[20px] bg-red-700 text-white rounded-md p-1">К-д цена:</span> <span className="text-[20px] underline">{item.credit}</span></h1>
                    </div>
                    <h1 className="flex justify-center items-center gap-4 w-[510px] mt-11"><span className="text-[20px] bg-red-700 text-white rounded-md p-1">Цена:</span> <span className="text-[20px] underline">{item.price}</span></h1>
                    {/* <h1><span className="text-[20px] bg-red-700 text-white rounded-md p-1">У нас:</span> <span className="text-[18px] underline">{item.our[0]}, {item.our[1]}</span></h1> */}
                </div>
                <button className="fixed top-4 right-4" onClick={() => setYes(false)}><IoIosCloseCircleOutline size={30} /></button>
            </div>
        </div>
    )
}