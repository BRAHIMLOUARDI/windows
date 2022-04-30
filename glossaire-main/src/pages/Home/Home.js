import React, { useEffect, useState } from 'react';
import './App.css'
import Search from './Components/Search';
import Language from './Components/Language.js';
import './Components/Language.css';
import Logo from './Components/Logo';
import Hisfav from './Components/Hisfav';
import DivShadow from './Components/DivShadow';
import { HomeProvider, useHomeContext } from './Homecontext';
import SiteLangauge from './Components/SiteLangaug';

const pagetext = {
  English: {
    title: "glossary",
    English: "English",
    French: "French",
    Arabic: "Arabic",
  },
  French: {
    title: "glossaire",
    English: "anglais",
    French: "francais",
    Arabic: "arabe",
  },
  Arabic: {
    title: "معجم",
    English: "longli",
    French: "froncais",
    Arabic: "3rbia",
  }
}
const Home = () => {


  var langauge = localStorage.getItem("sitelangauge")
  langauge = langauge ? langauge : "English"
  console.log(langauge);
  const [sitelangauge, setsitelangauge] = useState(langauge)

  useEffect(() => {

  }, [])
  return (
    <HomeProvider>
      <div>
        <div className='comp2'>
          <Logo />
          <h1 id='text'>{pagetext[sitelangauge].title}</h1>
          <div className='ligne'></div>
          <div className='comp1'>
            <Language />
            <Search />
          </div>
          <Hisfav />
        </div>
        <DivShadow />
      </div>
      <SiteLangauge setsitelangauge={setsitelangauge} />
    </HomeProvider>
  )
}

export default Home;
