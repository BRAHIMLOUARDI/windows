import React, { useEffect, useState } from "react";
import { CgArrowsExchangeAlt } from 'react-icons/cg'
import { useHomeContext } from '../Homecontext'
function Language() {

  const [selected, setselected] = useState({ selected1: "", selected2: "" })
  const { selection1, selection2 } = useHomeContext()
  const changeSelected = () => {
    let temp = selection1.current.value
    selection1.current.value = selection2.current.value;
    selection2.current.value = temp
    setselected({ selected1: selection1.current.value, selected2: selection2.current.value })
  };
  useEffect(() => {
    setselected({ selected1: selection1.current.value, selected2: selection2.current.value })

  }, [])


  const autoChange = (e) => {
    // exchange the selected langauges if the new selected langauge  is equal to the one in the other side 
    if (selection1.current.value !== selected.selected1 && selection1.current.value === selected.selected2) {
      selection2.current.value = selected.selected1

    } else {
      if (selection2.current.value !== selected.selected2 && selection2.current.value === selected.selected1) {
        selection1.current.value = selected.selected2
      }
    }
    setselected({ selected1: selection1.current.value, selected2: selection2.current.value })
  }
  return (
    <div className="container-Select" defaultValue="French" onChange={autoChange}>
      <select id='selection1' ref={selection1} className="Elm-Sel1">
        <option value="French" >🇫🇷 French</option>
        <option value="English">🇬🇧 English</option>
        <option value="Arabic">🇸🇦 Arabic</option>
      </select>

      <div className="echange-bar">
        <a href="#" className="Change" onClick={changeSelected} >
          <CgArrowsExchangeAlt />
        </a>
      </div>
      <select id='selection2' ref={selection2} className='Elm-Sel2' defaultValue="English" onChange={autoChange} >
        <option value="French" >🇫🇷 French</option>
        <option value="English">🇬🇧 English</option>
        <option value="Arabic">🇸🇦 Arabic</option>
      </select>
    </div>
  )
}

export default Language;