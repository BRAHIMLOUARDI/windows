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
    <form action="#" className='searchbox_admin'>
      <div className='box1'>
        <button type='submit' className='Search-btn1' ref={inputRef} onClick={(e) => { handleSearch(e, searchvalue) }} >
          <BsSearch className='Bs1' />
        </button>
        <div className='Search-cont1'>
          <input type='search' value={searchvalue} onChange={handlchange} id='Search' className='search1' placeholder='Search a word ...' />
        </div>
        <a onClick={resetSearchValue} className='Close1'>
          <GrClose className={`${iswriting ? "Gr1 show1" : "Gr1"}`} />
        </a>

      </div>
    </form>
  )
}

export default Search;