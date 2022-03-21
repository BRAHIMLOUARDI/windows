import React from 'react';
import './App.css'
import Search from './Components/Search';
import Language from './Components/Language.js';
import './Components/Language.css';
import Logo from './Components/Logo';
import Hisfav from './Components/Hisfav';




const HOME = () => {
  return (
    <div className='comp2'>
      <Logo />
      <h1 id='text'>Online Science Glossary <br />For Students</h1>
      <div className='ligne'></div>
      <div className='comp1'>
        <Language />
        <Search />
      </div>
      <Hisfav />
    </div>
  )
}

export default HOME;
