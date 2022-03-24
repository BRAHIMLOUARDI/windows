import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useHomeContext } from "../Homecontext"




function Search() {
    const { setisopen, setwordtraduction, selection2 } = useHomeContext()
    const [searchvalue, setsearchvalue] = useState("")
    const [iswriting, setiswriting] = useState(false)

    const [message, setmessage] = useState("")
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
        setsearchvalue("")
        const input = document.getElementById('Search').focus();
        setiswriting(false);
    }

    const fetchData = async (value) => {

        try {

            const response = await fetch('http://localhost:5000/query',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ word: value })
                })


            const answer = await response.json()
            console.log(answer);
            if (answer.success) {
                let lang = selection2.current.value
                setwordtraduction(answer.data[lang])

            } else {
                setmessage(answer.msg)

            }
            console.log(answer);
        } catch (error) {
            console.log({ "find error": error });
            setmessage("word not found")
        }
    }



    const searchword = () => {
        if (iswriting) {
            setisopen(true);
            fetchData(searchvalue)
        }
    }

    return (
        <div className='Search-bar'>
            <div className='box'>
                <a className='Search-btn' onClick={searchword} >
                    <BsSearch className='Bs' />
                </a>
                <div className='Search-cont'>
                    <input type='search' value={searchvalue} onChange={handlchange} id='Search' className='search' placeholder='Search Here ...' />
                </div>
                <a href='#' onClick={resetSearchValue} className='Close'>
                    <GrClose className={`${iswriting ? "Gr show" : "Gr"}`} />
                </a>
            </div>
        </div>
    )
}

export default Search;