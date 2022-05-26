import React, { useRef, useState } from "react";
// import "../App.css";
import { FaVolumeUp } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import Navbar from "./NavBar";

function PhraseTranslate() {
  const sourceareaRef = useRef()
  const cibleareaRef = useRef()
  const [message, setmessage] = useState("")
  const gettransltion = async () => {
    setmessage("")
    try {
      const sentence = sourceareaRef.current.value
      // http://127.0.0.1:8000/query/je%20pas%20bien/translate/
      const response = await fetch(`http://127.0.0.1:8000/query/${sentence}/translate/`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },

        })


      const answer = await response.json()
      console.log(answer);
      setmessage(answer.ans)

      console.log(answer);
    } catch (error) {
      console.log({ "find error": error });
      setmessage("error")
    }
    console.log(sourceareaRef.current.value);
  }

  const echange = () => {
    const selection1 = document.getElementById("select1");
    const selection2 = document.getElementById("select2");
    let temp = selection1.value;
    selection1.value = selection2.value;
    selection2.value = temp;
  };

  return (
    <div className="body1">
      <div className="App">
        <Navbar />
        <div className="Translate">
          <div className="container">
            <div className="wrapper2">
              <div className="text-input">
                <textarea
                  ref={sourceareaRef}
                  spellCheck="false"
                  className="from-text"
                  placeholder="Enter text"
                ></textarea>
                <textarea
                  value={message}
                  spellCheck="false"
                  readOnly
                  disabled
                  ref={cibleareaRef}
                  className="to-text"
                  placeholder="Translation"
                ></textarea>
              </div>
              <ul className="controls">
                <li className="row from">
                  <div className="icons">
                    <i
                      id="from"
                      className="fas fa-volume-up"
                      onClick={() => {
                        const fromText = document.querySelector(".from-text");
                        const lang = document.querySelector("#select1");
                        const utterance = new SpeechSynthesisUtterance(
                          fromText.value
                        );
                        utterance.lang = lang.value;
                        speechSynthesis.speak(utterance);
                      }}
                    >
                      <FaVolumeUp />
                    </i>
                    <i
                      id="from"
                      className="fas fa-copy"
                      onClick={(e) => {
                        const fromText = document.querySelector(".from-text");
                        console.log(fromText.value);
                        navigator.clipboard.writeText(fromText.value);
                      }}
                    >
                      <FaCopy />
                    </i>
                  </div>
                  <select id="select1" defaultValue="fr-FR">
                    <option value="fr-FR">French</option>
                    <option value="en-GB">English</option>
                    <option value="ar-Arabic">Arabe</option>
                  </select>
                </li>
                <li className="exchange">
                  <i className="fas fa-exchange-alt" onClick={echange}>
                    <FaExchangeAlt />
                  </i>
                </li>
                <li className="row to">
                  <select id="select2" defaultValue="en-GB">
                    <option value="fr-FR">French</option>
                    <option value="en-GB">English</option>
                    <option value="ar-Arabic">Arabe</option>
                  </select>
                  <div className="icons">
                    <i
                      id="to"
                      className="fas fa-volume-up"
                      onClick={() => {
                        const fromText = document.querySelector(".to-text");
                        const lang = document.querySelector("#select2");
                        const utterance = new SpeechSynthesisUtterance(
                          fromText.value
                        );
                        console.log(utterance.lang);
                        utterance.lang = lang.value;
                        speechSynthesis.speak(utterance);
                      }}
                    >
                      <FaVolumeUp />
                    </i>
                    <i
                      id="to"
                      className="fas fa-copy"
                      onClick={(e) => {
                        const fromText = document.querySelector(".to-text");
                        console.log(fromText.value);
                        navigator.clipboard.writeText(fromText.value);
                      }}
                    >
                      <FaCopy />
                    </i>
                  </div>
                </li>
              </ul>
            </div>
            <button onClick={gettransltion}>Translate Text</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhraseTranslate;
