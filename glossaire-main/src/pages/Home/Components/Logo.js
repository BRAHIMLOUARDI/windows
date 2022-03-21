import React from 'react'
import imgLogo from './Logo.png'

function Logo(){
    return(
        <div className='logo'>
           <img id='logomg' src={imgLogo} alt="Logo"/>
              <h1 id='title'>Glossary<span id='title2'>scien</span></h1>
        </div>

    )
}

export default Logo