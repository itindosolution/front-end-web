import { useState } from "react";
import logo from "../assets/image/logo.webp";
import idn from "../assets/image/idn.webp";
import uk from "../assets/image/uk.webp";
import Login from "./auth/Login";

function Navigate({lang,changeLang}) {
  const [nav, setNav] = useState(true);
  const [login, setLogin] = useState(true);
  const id = ["Halaman Depan","Layanan","Paket","Estimasi", "Masuk"];
  const en = ["Home", "Service", "Package", "Estimate", "Login"];

  const chLang = lang === "idn"?id:en;

  const navEvent = ()=>{
    const getNav= document.getElementById("nav-show");
    if(nav){
      getNav.classList.remove("invisible");
      getNav.classList.remove("ml-20");
      getNav.classList.add("z-10");
      getNav.classList.add("left-0");
      getNav.classList.add("ease-in");
      getNav.classList.add("duration-500");
      setNav(false);
    }else{
      getNav.classList.add("invisible");
      getNav.classList.remove("ease-in");
      getNav.classList.remove("duration-500");
      getNav.classList.remove("z-10");
      getNav.classList.remove("left-0");
      getNav.classList.add("ml-20");
      setNav(true);
    }
  }

  const onLogin = ()=>{
    const getLogin= document.getElementById("login-show");
    if(login){
      getLogin.classList.remove("invisible");
      getLogin.classList.add("z-30");
      setLogin(false);
    }else{
      getLogin.classList.add("invisible");
      getLogin.classList.remove("z-30");
      setLogin(true);
    }
  }

  return (
    <section className="snap-start w-full h-screen">
      <div className="" id="home">
        <div className="w-full static h-10 bg-white z-20">
        </div>
        <div className="flex flex-row items-center text-center w-full fixed bg-white z-20">
          <div className="basis-1/4 md:basis-5/12">
            <img src={logo} alt="logo" className="p-1 md:pl-5"/>
          </div>
          <h1 className="basis-2/4 md:basis-2/12 text-xl font-bold md:text-2xl">ITINDO SOLUTIONS</h1>
          <div className="basis-1/4 md:basis-5/12">
            { nav ? <i className="material-icons md:hidden text-2xl" onClick={navEvent} id="menu">menu</i>: <i className="fa fa-close text-lg md:hidden" onClick={navEvent}/>}
            <nav className="invisible ml-20 fixed mt-4 md:left-0 md:mt-4 w-full md:visible md:static bg-white " id="nav-show">
              <ul className="pr-5 pl-5 md:inline-block md:list-none md:no-underline"> 
                <li className="text-xl border-b-2 p-3 md:inline-block md:list-none md:p-2 md:m-1 md:text-sm hover:font-bold cursor-pointer" onClick={navEvent}><a href="#home">{chLang[0]}</a></li>
                <li className="text-xl border-b-2 p-3 md:inline-block  md:list-none md:p-2 md:m-1 md:text-sm hover:font-bold cursor-pointer" onClick={navEvent}><a href="#layanan">{chLang[1]}</a></li>
                <li className="text-xl border-b-2 p-3 md:inline-block  md:list-none md:p-2 md:border-b-2 md:m-1 md:text-sm hover:font-bold cursor-pointer" onClick={navEvent}><a href="#paket">{chLang[2]}</a></li>
                <li className="text-xl border-b-2 p-3 md:inline-block  md:list-none md:p-2 md:border-b-2 md:m-1 md:text-sm hover:font-bold cursor-pointer" onClick={navEvent}><a href="#simulasi">{chLang[3]}</a></li>
                <li className="text-xl p-3 md:inline-block  md:list-none md:p-2 md:border-b-2 md:m-1 md:text-sm hover:font-bold cursor-pointer" onClick={onLogin}>{chLang[4]}</li>
                <li className="text-xl p-3 md:inline-block  md:list-none md:p-2  md:m-1">
                  <img src={idn} width="40px"alt="indonesia" className="inline-block shadow-lg md:w-7 hover:w-8 cursor-pointer" onClick={()=>changeLang("idn")}/> | <img src={uk} width="40px" alt="inggris" className="inline-block shadow-xl md:w-7 hover:w-8 cursor-pointer" onClick={()=>changeLang("uk")}/>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Login ontes={onLogin} />
      </div>
    </section>
  );
}

export default Navigate;