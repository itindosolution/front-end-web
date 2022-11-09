import { useState } from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Estimate from './components/Estimate';
import Footer from './components/Footer';
import Navigate from './components/Navigate';
import Package from './components/Package';
import Serivces from './components/Services';

function App() {
  const [lang, setLang] = useState("idn");
  const changeLang = (lang)=>{
    setLang(lang)
  };

  
  
  return (
    <div className='main max-h-screen overflow-y-scroll snap snap-y snap-mandatory text-slate-500'>
      <section class="snap-start w-full h-screen"><Navigate lang={lang} changeLang={changeLang} ></Navigate></section>
      <Banner lang={lang}></Banner>
      <section class="snap-start w-full h-screen"><Serivces lang={lang}></Serivces></section>
      <section class="snap-start w-full h-screen"><Package lang={lang}></Package></section>
      <section class="snap-start w-full h-screen"><Estimate lang={lang}></Estimate></section>
      <section class="snap-start w-full h-screen"><About lang={lang}></About></section>
      <section class="snap-start w-full h-screen"><Footer lang={lang}></Footer></section>
    </div>
  );
}

export default App;
