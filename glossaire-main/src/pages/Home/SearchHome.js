import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';





const SearchHome = (props) => {

  const { getSearchValue, setmessage } = props

  const [searchvalue, setsearchvalue] = useState("")
  const [iswriting, setiswriting] = useState(false)

  const handlchange = (e) => {

    setsearchvalue(e.target.value)
    if (e.target.value) {
      setiswriting(true)
    }
    else {
      setiswriting(false)
    }
  }

  const resetSearchValue = () => {
    setmessage("")
    setsearchvalue("")
    const input = document.getElementById('Search').focus();
    setiswriting(false);
  }

  return (
    <form action="#">
      <div className='box'>
        <button type='submit' className='Search-btn' onClick={(e) => { getSearchValue(e, searchvalue) }} >
          <BsSearch className='Bs' />
        </button>
        <div className='Search-cont'>
          <input type='search' value={searchvalue} onChange={handlchange} id='Search' className='search' placeholder='Search a word ...' />
        </div>
        <a onClick={resetSearchValue} className='Close'>
          <GrClose className={`${iswriting ? "Gr show" : "Gr"}`} />
        </a>

      </div>
    </form>
  )
}

export default SearchHome;