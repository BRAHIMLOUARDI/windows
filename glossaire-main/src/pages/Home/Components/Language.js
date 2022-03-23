import React from "react";
import { CgArrowsExchangeAlt } from 'react-icons/cg'

function Language() {
  // const options = [
  //   {label: "🇫🇷   French",value: "French",},
  //   {label: "🇬🇧 English",value: "English",},
  //   {label: "🇸🇦 Arabe",value: "Arabe",},
  // ];
  let test1 = 'French';
  let test2 = 'English';


  const changeSelected = () => {
    const text = document.getElementById('test').value;
    document.getElementById('test').value = document.getElementById('test2').value;
    document.getElementById('test2').value = text
    test1 = document.getElementById('test').value;
    test2 = document.getElementById('test2').value;
  };


  const autoChange = () => {
    if (document.getElementById('test2').value === document.getElementById('test').value) {
      document.getElementById('test2').value = test1;
      document.getElementById('test').value = test2;
    }
    test2 = document.getElementById('test2').value;
    test1 = document.getElementById('test').value;
  }
  return (
    <div className="container-Select" defaultValue='French' onChange={autoChange}>
      <select id='test' className="Elm-Sel1">
        <option value="French" >🇫🇷 French</option>
        <option value="English">🇬🇧 English</option>
        <option value="Arabe">🇸🇦 Arabe</option>
      </select>
      {/* <select selectedValue='English'>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
        </select> */}
      <div className="echange-bar">
        <a href="#" className="Change" onClick={changeSelected} >
          <CgArrowsExchangeAlt />
        </a>
      </div>
      {/* <select>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
        </select> */}
      <select id='test2' className='Elm-Sel2' defaultValue='English' onChange={autoChange} >
        <option value="French" >🇫🇷 French</option>
        <option value="English">🇬🇧 English</option>
        <option value="Arabe">🇸🇦 Arabe</option>
      </select>
    </div>
  )
}

export default Language;