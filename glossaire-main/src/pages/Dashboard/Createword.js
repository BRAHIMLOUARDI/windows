import React, { useState, useRef } from 'react'


import "./Dashboard.css"
import Navbar from './Navbar'

const Createword = () => {
  const [message, setmessage] = useState("")
  const [wordId, setwordId] = useState(510)
  const ArabicRef = useRef(null);
  const FrenchRef = useRef(null);
  const EnglishRef = useRef(null);
  const handleClick = async () => {

    const word = {
      id: wordId,
      Arabic: ArabicRef.current.value,
      English: EnglishRef.current.value,
      French: FrenchRef.current.value
    }
    try {

      const response = await fetch('http://localhost:5000/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(word)
        })
      const status = await response.json()
      console.log(status);
      if (status.success) {
        setmessage(status.msg)
        setwordId(prev => prev + 1)
      } else {
        setmessage(status.msg)
      }
    } catch (error) {
      setmessage("Failed to create the word")

    }


  }
  return (
    <>
      <Navbar />
      <div className="form-container">
        {message && <div role="alert" className="search-message" >{message}</div>}

        <form action="#">
          <label>arabic :</label><br />
          <div className="word-container create">
            <input type="text" className="word-input"
              ref={ArabicRef}
              name="Arabic"
            />
          </div>
          <label>french :</label><br />
          <div className="word-container create">
            <input type="text" className="word-input"
              ref={FrenchRef}
              name="French"
            />
          </div>
          <label>english :</label><br />

          <div className="word-container create">
            <input type="text" className="word-input"
              ref={EnglishRef}
              name="English"
            />
          </div>
        </form>
      </div>
      <div className='Create-oper-cont' >
        <button type="button" name="English" method="add" onClick={() => { handleClick("add") }}>
          add
        </button>
      </div>
    </>
  )
}
export default Createword