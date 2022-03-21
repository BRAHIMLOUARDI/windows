import React from 'react';
import {CgArrowsExchangeAlt} from 'react-icons/cg';

const options= [
    {label: "🇫🇷   French",value: "French",},
    {label: "🇬🇧 English",value: "English",},
    {label: "🇸🇦 Arabe",value: "Arabe",},
]


function Test(){
    return (
        <div className='Select-Option'>
            <select>
                {options.map((option)=>{
                    return <option value={options.value} label={options.label} />
                })}
            </select>
            <div>
            <a href="#" className="Change" onClick={changeSelected} >
              <CgArrowsExchangeAlt />
            </a>
            <select>
                {options.map((option)=>{
                    return <option value={options.value} label={options.label} />
                })}
            </select>
        </div>
        </div>
    )
}

export default Test;