import './App.css'
import Phone from "./Phone"

let phones = [
    {
        id: 1,
        name: 'Redmi 13C',
        img: 'https://mini-io-api.texnomart.uz/catalog/product/3565/356508/193733/ad477c17-84b8-4d3c-b420-a10736c9b049.webp',
        display: "6.74 IPS LCD - 720 x 1600",
        chip: "MediaTek Helio G85",
        camera: "3 (50 MP + 2 MP)",
        batery: "5000 мАч",
        os: "Android 13",
        ves: "192 г.",
        memory: [{ name: "4/128", price:"1 700 000 "}, { name: "6/128", price: ""}, { name: "8/256", price: "" }],
        color: [{ name: "#9AFF8B" }, { name: "black" }, { name: "white" }]
    },
    {
        id: 2,
        name: 'Redmi Note 13 Pro',
        img: 'https://static.sello.uz/unsafe/x500/https://static.sello.uz/fm/20240115/7f370e311e72dd4802338d50f28c4daf.png',
        price: '3 760 000 сум',
        display: "6.67 AMOLED - 1220 x 2712",
        chip: "Qualcomm Snapdragon 7s Gen 2",
        camera: "3 (200 MP + 8 MP + 2 MP)",
        batery: "5100 мАч",
        os: "Android 13",
        ves: "187 г.",
        memory: [{ name: "8/256", price: "" }, {name: "12/512", price: ""}],
        color: [{ name: "black" }, {name: "#50C878"}, {name: "#8182B8"}]
    },
    {
        id: 3,
        name: 'SAMSUNG A54',
        img: 'https://images.uzum.uz/cleniqdennt1kt4d7ssg/original.jpg',
        price: '4.120.000',
        display: "6.4 AMOLED - 1080 x 2340",
        chip: " Samsung Exynos 1380",
        camera: "3 (50 MP + 12 MP + 5 MP)",
        batery: "5000 мАч",
        os: "Android 14",
        ves: " 202 г.",
        memory: [{ name: "6/128", price: "3 700 000" }, {name: "8/128", price: "3 780 000"}, {name: "8/256", price: "4 120 000"}],
        color: [{ name: "black" }, {name: "green"}, {name: "white"}]
    },
    // {
    //     id: 3,
    //     name: '',
    //     img: '',
    //     price: '',
    //     display: "",
    //     chip: "",
    //     camera: "",
    //     batery: "",
    //     os: "",
    //     ves: "",
    //     memory: [{ name: "" }, {name: ""}],
    //     color: [{ name: "" }, {name: ""}, {name: ""}]
    // },
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
