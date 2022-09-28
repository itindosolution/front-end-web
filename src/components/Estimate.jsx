import { useState } from "react";
import EstimateHardware from "./estimate/EstimateHardware";
import EstimateSoftware from "./estimate/EstimateSoftware";
import EstimateInfra from "./estimate/EstimateInfra";
import EstimateIot from "./estimate/EstimateIot";

function Estimate(){
    const aktif ="w-80 text-center block border rounded bg-blue-400 hover:bg-blue-700 text-white py-2 px-4";
    const nonaktif = "w-80 text-center block border rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4";

    const [search,setSearch] = useState("software");
    const [estimate,setEstimate] = useState(<EstimateSoftware></EstimateSoftware>);

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
        <div className="m-auto p-5 md:w-10/12 h-128">
            <h2 className="text-center pt-3 text-xl font-bold" id="simulasi">Simulasi</h2>
            <ul className="flex overflow-x-auto p-3 scrollbar-hide">
                <li className="flex-1 mr-2 ">
                    <p id="software" className={search==="software"?aktif:nonaktif} onClick={()=>processSearch("software")}>Pengembangan Perangkat Lunak</p>
                </li>
                <li className="flex-1 mr-2 ">
                    <p id="hardware" className={search==="hardware"?aktif:nonaktif} onClick={()=>processSearch("hardware")}>Perbaikan Hardware dan Software</p>
                </li>
                <li className="flex-1 mr-2 ">
                    <p id="infra" className={search==="infra"?aktif:nonaktif} onClick={()=>processSearch("infra")}>Infrastruktur Jaringan dan Server</p>
                </li>
                <li className="flex-1 mr-2 ">
                    <p id="iot" className={search==="iot"?aktif:nonaktif} onClick={()=>processSearch("iot")}>Internet Of Things</p>
                </li>
            </ul>
            <div id="package" className="overflow-x-auto scrollbar-hide">
                    {estimate}
            </div>
        </div>
    )
}

export default Estimate;
