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
      <Navigate lang={lang} changeLang={changeLang} ></Navigate>
      <Banner lang={lang}></Banner>
      <Serivces lang={lang}></Serivces>
      <Package lang={lang}></Package>
      <Estimate lang={lang}></Estimate>
      <About lang={lang}></About>
      <Footer lang={lang}></Footer>
    </div>
  );
}

export default App;
