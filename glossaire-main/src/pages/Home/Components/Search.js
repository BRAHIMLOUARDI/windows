import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';





function Search(){
    const [searchvalue,setsearchvalue]=useState("")
    const[iswriting,setiswriting]=useState(false)
    const handlchange=(e)=>{
        setsearchvalue(e.target.value)
        if (e.target.value){
            setiswriting(true)
        }
        else{
            setiswriting(false)
        }
    }

    const resetSearchValue=()=>{
        setsearchvalue("")
        const input =document.getElementById('Search').focus();
        setiswriting(false);
    }

    return (
        <div className='Search-bar'>
            <div className='box'>
               <a href='#' className='Search-btn'>
                   <BsSearch  className='Bs'/>
               </a>
               <div className='Search-cont'>
                   <input type='search' value={searchvalue} onChange={handlchange} id='Search'  className='search' placeholder='Search Here ...' />
               </div>
               <a href='#' onClick={resetSearchValue} className='Close'>
                   <GrClose   className={`${iswriting ? "Gr show":"Gr"}`}/>
               </a>
            </div>
        </div>
    )
}

export default Search;