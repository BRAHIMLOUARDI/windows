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
  const ArabicRefDesc = useRef(null);
  const FrenchRefDesc = useRef(null);
  const EnglishRefDesc = useRef(null);



  const handleClick1 = async (method) => {
    const word = {

      English: EnglishRef.current.value,
      French: FrenchRef.current.value,
      Arabic: ArabicRef.current.value,
      EnglishDesc: EnglishRefDesc.current.value,
      FrenchDesc: FrenchRefDesc.current.value,
      ArabicDesc: ArabicRefDesc.current.value,

    }

    if (method === "delete") {
      console.log("de");
      try {


        const response = await fetch(`http://127.0.0.1:8000/query/${wordId}/`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },

          })
        const answer = await response.json()
        console.log(answer);

        if (answer.success) {
          setmessage(answer.msg)
          restField("")
          setwordId(-1)

        } else {
          setmessage(answer.msg)
        }

      } catch (error) {
        setmessage("Failed to delete the word")
        console.log(error);
      }
    }
    else if (method === "update") {
      console.log("up");

      try {

        const response = await fetch(`http://127.0.0.1:8000/query/${wordId}/`,
          {
            method: 'PUT',
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


    } else if (method === "create") {
      console.log("cre");

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
          EnglishRefDesc.current.value = ""
          FrenchRefDesc.current.value = ""
          ArabicRefDesc.current.value = ""
        } else {
          setmessage(answer.msg)
        }
      } catch (error) {
        setmessage("Failed to create the word")

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
    setwordId(-1)
    EnglishRef.current.value = ""
    FrenchRef.current.value = ""
    ArabicRef.current.value = ""
    EnglishRefDesc.current.value = ""
    FrenchRefDesc.current.value = ""
    ArabicRefDesc.current.value = ""
  }



  const fetchData = async (value) => {

    try {

      const response = await fetch(`http://127.0.0.1:8000/query/${value}/`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },

        })


      const answer = await response.json()
      console.log(answer);
      if (answer.success) {
        setwordId(answer.data.id)
        EnglishRef.current.value = answer.data.English
        FrenchRef.current.value = answer.data.French
        ArabicRef.current.value = answer.data.Arabic
        EnglishRefDesc.current.value = answer.data.EnglishDesc
        FrenchRefDesc.current.value = answer.data.FrenchDesc
        ArabicRefDesc.current.value = answer.data.ArabicDesc
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

          <label>Arabic Description :</label><br />

          <div className="word-container desc">
            <textarea type="text" className="word-input"
              readOnly="readonly"
              name="Arabicdescription"
              ref={ArabicRefDesc}
            />
            <div className="edit-icon" >
              <button type="button" name="Arabicdescription" onClick={() => {
                ArabicRefDesc.current.focus()
                ArabicRefDesc.current.readOnly = false
              }}>
                {<AiOutlineEdit />}
              </button>

            </div>

          </div>

          <label>French Description :</label><br />

          <div className="word-container desc">
            <textarea type="text" className="word-input"
              readOnly="readonly"
              name="FrenchDescription"
              ref={FrenchRefDesc}
            />
            <div className="edit-icon" >
              <button type="button" name="FrenchDescription desc" onClick={() => {
                FrenchRefDesc.current.focus()
                FrenchRefDesc.current.readOnly = false
              }}>
                {<AiOutlineEdit />}
              </button>

            </div>

          </div>
          <label>English Description :</label><br />

          <div className="word-container desc">
            <textarea type="text" className="word-input"
              readOnly="readonly"
              name="EnglishDescription"
              ref={EnglishRefDesc}
            />
            <div className="edit-icon" >
              <button type="button" name="EnglishDescription" onClick={() => {
                EnglishRefDesc.current.focus()
                EnglishRefDesc.current.readOnly = false
              }}>
                {<AiOutlineEdit />}
              </button>

            </div>

          </div>

        </form>

        <div className='Create-oper-cont' >
          <button type="button" name="English" method="create" onClick={() => { handleClick1("delete") }}>
            delete
          </button>
          <button type="button" name="English" method="update" onClick={() => { handleClick1("update") }}>
            update
          </button>

        </div>
      </div>
    </>
  )
}
export default Editword

{/* <div className="opertions-container" >
<button type="button" name="English" method="deleteDoc" onClick={() => { handleClick1("delete") }}>
  {<AiOutlineDelete />}
</button>
<button type="button" name="English" method="updateDoc" onClick={() => { handleClick1("update") }}>
  {<BiExport />}
</button>
<button type="button" name="English" method="updateDoc" onClick={() => { handleClick1("create") }}>
  {<BiExport />}
</button>

</div> */}