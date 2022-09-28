function EstimateHardware(){
    return(
        <div>
            {/* {option} */}
            <SelectionHardware></SelectionHardware>
            <div className="flex text-center" >
                <div className="basis-1/2">
                    <a href="s" className="inline-flex items-center py-2 px-3 text-sm font-medium text-right text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        Sebelumnya
                    </a>
                </div>
                <div className="basis-1/2">
                    <button  className="inline-flex items-center py-2 px-3 text-sm font-medium text-right text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selanjutnya
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EstimateHardware;

function SelectionHardware(){
    return(
        <div className="flex flex-wrap text-center justify-center">
            <div className="max-w-sm m-3 bg-white rounded-lg border border-gray-200 shadow-xl md:m-3 md:max-w-xs">
                <a href="ss">
                    <img src="" alt="laptop">
                        
                    </img>
                    {/* <video className="md:w-80" id={feature.id} autoPlay muted>
                        <source src={feature.src} type="video/mp4" />
                    </video> */}
                </a>
                <div className="p-5">
                    <a href="s">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">Laptop</h5>
                    </a>
                    {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{feature.deskripsi[chLangNo]}</p>
                    <a href="s" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {chLang[1]}
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                    </a> */}
                </div>
            </div>
        </div>
    )
}