import { useState } from "react";
import EstimateHardware from "./estimate/EstimateHardware";
import EstimateSoftware from "./estimate/EstimateSoftware";
import EstimateInfra from "./estimate/EstimateInfra";
import EstimateIot from "./estimate/EstimateIot";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/Swiper.css";
function Estimate({lang}){
    const aktif ="w-80 text-center block border rounded bg-blue-300 hover:bg-blue-300 text-white py-2 px-4";
    const nonaktif = "w-80 text-center block border rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4";

    const [search,setSearch] = useState("software");
    const [estimate,setEstimate] = useState(<EstimateSoftware></EstimateSoftware>);

    const chLang = lang ==="idn"?"KALKULASI":"ESTIMATE";
    const processSearch = (type)=>{
        if(type === "software"){
            setEstimate(<EstimateSoftware></EstimateSoftware>);
        }else if(type === "hardware"){
            setEstimate(<EstimateHardware></EstimateHardware>);
        }else if(type === "infra"){
            setEstimate(<EstimateInfra></EstimateInfra>);
        }else if(type === "iot"){
            setEstimate(<EstimateIot></EstimateIot>);
        }else{
            setEstimate("load data")
        } 
        setSearch(type)   
    }

   
    return(
        <div className="m-auto p-5 md:w-10/12">
            <h2 className="text-center pt-3 text-xl font-bold" id="simulasi">{chLang}</h2>
            <br></br>
            <Swiper
                cssMode={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className="mr-2 snap-center">
                    <p id="software" className={search==="software"?aktif:nonaktif} onClick={()=>processSearch("software")}>Pengembangan Perangkat Lunak</p>
                </SwiperSlide>
                <SwiperSlide className="mr-2 snap-center">
                    <p id="hardware" className={search==="hardware"?aktif:nonaktif} onClick={()=>processSearch("hardware")}>Perbaikan Hardware dan Software</p>
                </SwiperSlide>
                <SwiperSlide className="mr-2 snap-center">
                    <p id="infra" className={search==="infra"?aktif:nonaktif} onClick={()=>processSearch("infra")}>Infrastruktur Jaringan dan Server</p>
                </SwiperSlide>
                <SwiperSlide className="mr-2 snap-center">
                    <p id="iot" className={search==="iot"?aktif:nonaktif} onClick={()=>processSearch("iot")}>Internet Of Things</p>
                </SwiperSlide>
            </Swiper>
            <hr/>
            <div id="package" className="overflow-x-auto scrollbar-hide">
                    {estimate}
            </div>
        </div>
    )
}

export default Estimate;
