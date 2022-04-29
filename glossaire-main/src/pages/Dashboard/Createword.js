import React, { useState, useRef } from 'react'


import "./Dashboard.css"
import Navbar from './Navbar'

const Createword = () => {
  const [message, setmessage] = useState("")

  const ArabicRef = useRef(null);
  const FrenchRef = useRef(null);
  const EnglishRef = useRef(null);
  const handleClick = async () => {

    const word = {

      English: EnglishRef.current.value,
      French: FrenchRef.current.value,
      Arabic: ArabicRef.current.value
    }
    try {

      const response = await fetch('http://127.0.0.1:8000/query/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(word)
        })
      const answer = await response.json()
      console.log(answer);
      if (answer.success) {
        setmessage(answer.msg)
        EnglishRef.current.value = ""
        FrenchRef.current.value = ""
        ArabicRef.current.value = ""
      } else {
        setmessage(answer.msg)
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