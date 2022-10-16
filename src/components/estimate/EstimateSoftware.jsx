import { useState } from "react";

function EstimateSoftware(){
    
    const [optionUser, setOptionUser] = useState("");
    const [pageCount, setPageCount] = useState(1);
    // const page = [
    //     <User processUser={processUser} selection={selection1} />,
    //     <User processUser={processUser} selection={selection1b} />,

    // ]
    const selection1 = ["pribadi","pendidikan","perusahaan"];
    const selection1a = ["profile data diri","profile usaha mikro", "e-commerce"];
    const selection1b = ["e-learning","profile sekolah", "rapot siswa"];
    const selection1c = ["company profile","e-commerce", "system internal"];

    const processUser = (user)=>{
        setOptionUser(user);
    }

    const [option, setOption] = useState(<User processUser={processUser} selection={selection1}></User>);

    const processOption = (page)=>{
        if(page===1){
            setOption(<User processUser={processUser} selection={selection1}></User>)
            // setPage(1);
        }else if(page===2){
            if(optionUser === "pribadi"){
                setOption(<User processUser={processUser} selection={selection1a}></User>)
            }else if(optionUser === "pendidikan"){
                setOption(<User processUser={processUser} selection={selection1b}></User>)
            }else{
                setOption(<User processUser={processUser} selection={selection1c}></User>)
            }

            // setPage(2);
        }
        
    }
    

    return(
        <div>
            {option}
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
                    {/* <button onClick={()=>processOption(page+1)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-right text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Selanjutnya
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                    </button> */}
                </div>
            </div>
        </div>
        
    )
}

export default EstimateSoftware;

function User({processUser, selection}){
    return(
        <div className="flex flex-wrap text-center justify-center">
            {
                selection.map((select)=>{
                    return(
                        <div onClick={()=>processUser(select)} className="w-80 text-white p-5 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:basis-3/12 rounded-lg border-2 border-slate-300 m-3">
                            <p>{select}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

// function UserPage2({processUser, selection}){
//     return(
//         <div className="flex flex-wrap text-center justify-center">
//             {
//                 selection.map((select)=>{
//                     return(
//                         <div onClick={()=>processUser(select)} className="w-80 text-white p-5 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:basis-3/12 rounded-lg border-2 border-slate-300 m-3">
//                             <p>{select}</p>
//                         </div>
//                     )
//                 })
//             }
            
//         </div>
//     )
// }

// function User({processUser, selection}){
//     return(
//         <div className="flex flex-wrap text-center justify-center">
//             {
//                 selection.map((select)=>{
//                     return(
//                         <div onClick={()=>processUser(select)} className="w-80 text-white p-5 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:basis-3/12 rounded-lg border-2 border-slate-300 m-3">
//                             <p>{select}</p>
//                         </div>
//                     )
//                 })
//             }
            
//         </div>
//     )
// }