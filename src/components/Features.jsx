import software from "../assets/video/software.mp4";
import hardware from "../assets/video/hardware.mp4";
import infra from "../assets/video/infrastructure.mp4";
import iot from "../assets/video/iot.mp4";

function Features({lang}){
    const features = [
        {
            id:"videoSoftware",
            judul:["Pengembangan Perangkat Lunak", "Software Development"],
            src:software,
            deskripsi:["Kami menyediakan layanan jasa untuk pembuatan aplikasi berbasis web, dekstop dan mobile disemua bidang sesuai dengan kebutuhan anda.","We provide services for the creation of web-based, desktop and mobile applications in all fields according to your needs."]
        },
        {
            id:"videoHardware",
            judul:["Perbaikan Hardware Dan Software", "Hardware and Software Repair"],
            src:hardware,
            deskripsi:["Kami menyediakan jasa service hardware seperti perangkat komputer, laptop dan Handphone. dan Jasa perbaikan software seperti install ulang OS , restore data dan Optimalisasi aplikasi.", "We provide hardware service services such as computers, laptops and cellphones. and Software repair services such as OS reinstallation, data restore and application optimization."]
        },
        {
            id:"videoInfra",
            judul:["Infrastruktur Jaringan Dan Server","Network And Server Infrastructure"],
            src:infra,
            deskripsi:["Kami menyediakan jasa pembuatan rancangan dan instalasi pemasangan jaringan internet, telepon, dan CCTV.", "We provide design and installation services for internet, telephone, and CCTV network installation."]
        },
        {
            id:"videoIot",
            judul:["Internet Of Things dan Robotic","Internet Of Things and Robotic"],
            src:iot,
            deskripsi:["Kami menyediakan jasa pembuatan rancangan dan pembuatan product IOT untuk rumahan sampai industri skala besar .", "We provide design and manufacture of IoT products for home to large-scale industries"]
        }
    ];
    const idn = ["Layanan", "Lebih lanjut"];
    const uk = ["Services", "Read More"];

    const chLang = lang === "idn"?idn:uk;
    const chLangNo = lang === "idn"? 0:1;

    return(
        <div className="">
            <hr className="md:invisible"/>
            <p className="text-center text-xl font-bold pt-5 " id="layanan">{chLang[0]}</p>
            <div className="flex flex-wrap md:ml-20">
                {
                    features.map((feature,index)=>{
                        return(
                            <div className="max-w-sm m-3 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs" key={index}>
                                <a href="ss">
                                    <video className="md:w-80" id={feature.id} autoPlay muted>
                                        <source src={feature.src} type="video/mp4" />
                                    </video>
                                </a>
                                <div className="p-5">
                                    <a href="s">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">{feature.judul[chLangNo]}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{feature.deskripsi[chLangNo]}</p>
                                    <a href="s" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {chLang[1]}
                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                                    </a>
                                </div>
                            </div>
                            
                        );
                    })
                }
            </div>
        </div>

    )
}

export default Features