import React, { useEffect, useState, useRef } from "react"
import Search from "./Search"
import Navbar from "./Navbar"
import { BiExport } from "react-icons/bi"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

import "./Dashboard.css"


const Editword = () => {


  const [wordId, setwordId] = useState(0)
  const [message, setmessage] = useState("")
  const ArabicRef = useRef(null);
  const FrenchRef = useRef(null);
  const EnglishRef = useRef(null);

  const handleClick = async (method) => {

    if (method === "delete") {
      try {
        // await deleteDoc(ref);

        const response = await fetch('http://localhost:5000/delete',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({ _id: wordId })
          })
        const answer = await response.json()
        console.log(answer);

        if (answer.success) {
          setmessage(answer.msg)
          restField("")
          setwordId(0)

        } else {
          setmessage(answer.msg)
        }

      } catch (error) {
        setmessage("Failed to delete the word")
        console.log(error);
      }
    }
    else {
      const word = {
        _id: wordId,
        English: EnglishRef.current.value,
        French: FrenchRef.current.value,
        Arabic: ArabicRef.current.value
      }
      try {

        const response = await fetch('http://localhost:5000/update',
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

        } else {
          setmessage(answer.msg)

        }

      } catch (error) {
        setmessage("Failed to update the word")
      }


    }
  }


  const handleSearch1 = async (e, searchvalue) => {
    console.log(e);
    e.preventDefault()
    setmessage("")
    try {


    } catch (error) {
      console.log(error);
    }
  }
  const restmessage = () => {

    setmessage("")
  }
  const restField = () => {
    setwordId(0)
    ArabicRef.current.value = ""
    FrenchRef.current.value = ""
    EnglishRef.current.value = ""
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
        setwordId(answer.data._id)
        EnglishRef.current.value = answer.data.English
        FrenchRef.current.value = answer.data.French
        ArabicRef.current.value = answer.data.Arabic
      } else {
        setmessage(answer.msg)
        restField()
      }
      console.log(answer);
    } catch (error) {
      console.log({ "find error": error });
      setmessage("word not found")
    }
  }


  const handleSearch = (e, searchvalue) => {
    console.log(e);
    e.preventDefault()
    setmessage("")
    fetchData(searchvalue)
  }





  useEffect(() => {
    console.log(wordId);

  }, [wordId])
  return (
    <>
      <Navbar />
      <Search funct={[handleSearch, restField, restmessage]} />
      {message && <div role="alert" className="search-message" >{message}</div>}
      <div className="form-container">
        <form action="#">
          <label>arabic :</label><br />

          <div className="word-container">
            <input type="text" className="word-input"
              readOnly="readonly"
              name="Arabic"
              ref={ArabicRef}
            />
            <div className="edit-icon" >
              <button type="button" name="Arabic" onClick={() => {
                ArabicRef.current.readOnly = false
                ArabicRef.current.focus()

              }}>
                {<AiOutlineEdit />}
              </button>

            </div>
          </div>
          <label>french :</label><br />

          <div className="word-container">
            <input type="text" className="word-input"
              readOnly="readonly"

              name="French"
              ref={FrenchRef}
            />
            <div className="edit-icon" >
              <button type="button" name="French" onClick={() => {
                FrenchRef.current.readOnly = false
                FrenchRef.current.focus()
              }}>
                {<AiOutlineEdit />}
              </button>

            </div>
          </div>
          <label>english :</label><br />

          <div className="word-container">
            <input type="text" className="word-input"
              readOnly="readonly"
              name="English"
              ref={EnglishRef}
            />
            <div className="edit-icon" >
              <button type="button" name="English" onClick={() => {
                EnglishRef.current.focus()
                EnglishRef.current.readOnly = false
              }}>
                {<AiOutlineEdit />}
              </button>

            </div>

          </div>

        </form>
        <div className="opertions-container" >
          <button type="button" name="English" method="deleteDoc" onClick={() => { handleClick("delete") }}>
            {<AiOutlineDelete />}
          </button>
          <button type="button" name="English" method="updateDoc" onClick={() => { handleClick("update") }}>
            {<BiExport />}
          </button>
        </div>

      </div>
    </>
  )
}
export default Editword

