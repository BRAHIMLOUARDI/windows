import React, { useEffect, useState } from 'react';
import './App.css'
import Search from './Components/Search';
import Language from './Components/Language.js';
import './Components/Language.css';
import Logo from './Components/Logo';
import { pagetext } from './textdata';
import DivShadow from './Components/DivShadow';
import { useHomeContext } from './Homecontext'

// import { HomeProvider } from './Homecontext';
import SiteLangauge from './Components/SiteLangaug';
// var sherdSiteLangauge
const Home = () => {
  const { sitelangauge } = useHomeContext()


  // var langauge = localStorage.getItem("sitelangauge")
  // console.log(langauge);
  // langauge = langauge ? langauge : "English"
  // console.log(langauge);
  // const [sitelangauge, setsitelangauge] = useState(langauge)
  // sherdSiteLangauge = sitelangauge

  useEffect(() => {

  }, [])
  return (
    <>
      <div>
        <div className='comp2'>
          <Logo />
          <h1 id='text'>{pagetext[sitelangauge].title}</h1>
          <div className='ligne'></div>
          <div className='comp1'>
            <Language />
            <Search />
          </div>

        </div>
        <DivShadow />
      </div>
      <SiteLangauge />
    </>
  )
}


// export { sherdSiteLangauge }
export default Home;
