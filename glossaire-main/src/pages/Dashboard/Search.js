import React, { useState, useRef } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';





function Search(props) {
  const [handleSearch, restField, restmessage] = props.funct
  const [searchvalue, setsearchvalue] = useState("")
  const [iswriting, setiswriting] = useState(false)
  const inputRef = useRef(null)
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
    restmessage()
    restField()
    setsearchvalue("")
    inputRef.current.focus();
    setiswriting(false);
  }

  return (
    <form action="#">
      <div className='box'>
        <button type='submit' className='Search-btn' ref={inputRef} onClick={(e) => { handleSearch(e, searchvalue) }} >
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

export default Search;