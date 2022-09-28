import { useState } from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Estimate from './components/Estimate';
import Feature from './components/Features';
import Footer from './components/Footer';
import Navigate from './components/Navigate';
import Package from './components/Package';

function App() {
  const [lang, setLang] = useState("idn");
  const changeLang = (lang)=>{
    setLang(lang)
  };

  
  
  return (
    <div className='main text-slate-500'>
      <Navigate lang={lang} changeLang={changeLang} ></Navigate>
      <Banner lang={lang}></Banner>
      <Feature lang={lang}></Feature>
      <Package lang={lang}></Package>
      <Estimate lang={lang}></Estimate>
      <About lang={lang}></About>
      <Footer lang={lang}></Footer>
    </div>
  );
}

export default App;
