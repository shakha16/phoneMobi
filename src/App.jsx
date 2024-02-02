import { useState } from 'react'
import './App.css'
import Phone from "./Phone"

let phones = [
    {
        id: 1,
        marka: "XIAOMI",
        name: 'Redmi 13C',
        img: 'https://mini-io-api.texnomart.uz/catalog/product/3565/356508/193733/ad477c17-84b8-4d3c-b420-a10736c9b049.webp',
        sixMonth: "500.446",
        twelfMonth: "240.773",
        price: '1 700 000 сум',
        credit: "1 992 000 сум",
        display: "6.74 IPS LCD - 720 x 1600",
        chip: "MediaTek Helio G85",
        camera: "3 (50 MP + 2 MP)",
        batery: "5000 мАч",
        os: "Android 13",
        ves: "192г",
        our: ["Гагарин", "Согдиана"],
        memory: [{ name: "4/128" }, { name: "6/128" }, { name: "8/256" }],
        color: [{ name: "red" }, { name: "yellow" }, { name: "black" }, { name: "orange" }]
    },
    // {
    //     id: 2,
    //     name: '',
    //     img: 'https://kattabozor.s3.eu-central-1.amazonaws.com/ri/a58022d35bbb637417c39002305c54f08008a9261242863709467ed50228f684_gjB7OU_640l.jpg',
    //     month: ["6-ой ", "12-ой "],
    //     price: ' сум',
    //     credit: " сум",
    //     display: "",
    //     chip: "", 
    //     camera: "",
    //     batery: "",
    //     os: "",
    //     ves: ""
    // }
]


function App() {
    return (
        <div className="container">
            <div className="w=[90%] flex flex-wrap gap-20 mt-10 justify-center ">
                {
                    phones.map(item => (
                        <Phone key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default App
