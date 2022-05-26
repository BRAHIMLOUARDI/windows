import React, { useState } from "react";
import "../App.css";
import { ImSearch } from "react-icons/im";
import { CgClose } from "react-icons/cg";
import { FaVolumeUp } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import Navbar from "./NavBar";
function Translate() {
  const infoText = document.querySelector(".info-text");
  const search = document.querySelector(".input");
  // const lang = document.querySelector(".to_lang").value;

  const [message, setmessage] = useState(
    "Choose the output language, Type any existing word and press enter to get meaning, Description."
  );
  const [ToLanguages, setToLanguages] = useState("English");
  const [wordtraduction, setwordtraduction] = useState(" ");
  const [isvalid, setisvalid] = useState(false);
  const [wordDescription, setwordDescription] = useState(" ");
  const [flag1, setflag1] = useState("fr");
  const [flag2, setflag2] = useState("us");

  const fetchData = async (value) => {
    try {
      // wrapper.classList.remove("active");
      setisvalid(false);
      const response = await fetch(
        `http://127.0.0.1:8000/query/${value}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const answer = await response.json();
      setmessage(`Searching the meaning of "${value}"`);
      if (answer.success) {
        // wrapper.classList.add("active");
        // infoText.style.color = "#000";
        // let lang = selection2.current.value;
        setisvalid(true);
        setwordtraduction(answer.data[`${ToLanguages}`]);
        setwordDescription(answer.data[`${ToLanguages}Desc`]);
      } else {
        infoText.style.color = "#000";
        setmessage(
          `Can't find the meaning of "${value}". Please, try to search for another word.`
        );
      }
    } catch (error) {
      setmessage(
        `Can't find the meaning of "${value}". Please, try to search for another word.`
      );
    }
  };

  const searchInput = (e) => {
    if (e.key === "Enter" && e.target.value) {
      fetchData(e.target.value);
    }
  };

  const removeIcon = () => {
    search.value = "";
    search.focus();
    setisvalid(false);
    infoText.style.color = "#9a9a9a";
    setmessage(
      "Type any existing word and press enter to get meaning, Description."
    );
  };

  return (
    <div className="body1">

      <div className="App">
        <Navbar />
        <div className="Translate">
          <div className="wrapper" id={`${isvalid ? "active" : ""}`}>
            <header>Glossary Multilanguage</header>
            <div className="drop-list">
              <div className="from">
                <p>From</p>
                <div className="select-box">
                  <img src={`https://flagcdn.com/48x36/${flag1}.png`} alt="flag" />
                  <select
                    id="selec1"
                    defaultValue="Frensh"
                    onChange={(e) => {
                      if (e.target.value === "French") setflag1("fr");
                      else if (e.target.value === "English") setflag1("us");
                      else setflag1("sa");
                    }}
                  >
                    <option value="French">French</option>
                    <option value="English">English</option>
                    <option value="Arabic">Arabe</option>{" "}
                  </select>
                </div>
              </div>
              <div className="icon">
                <i
                  className="fas fa-exchange-alt"
                  onClick={() => {
                    const selection1 = document.getElementById("selec1");
                    const selection2 = document.getElementById("selec2");
                    let temp = selection1.value;
                    let temp1 = flag1;
                    setflag1(flag2);
                    setflag2(temp1);
                    selection1.value = selection2.value;
                    selection2.value = temp;
                    setToLanguages(selection2.value);
                  }}
                >
                  <FaExchangeAlt />
                </i>
              </div>
              <div className="to">
                <p>To</p>
                <div className="select-box">
                  <img src={`https://flagcdn.com/48x36/${flag2}.png`} alt="flag" />
                  <select
                    id="selec2"
                    className="to_lang"
                    defaultValue="English"
                    onChange={(e) => {
                      setToLanguages(e.target.value);
                      if (e.target.value === "French") setflag2("fr");
                      else if (e.target.value === "English") setflag2("us");
                      else setflag2("sa");
                    }}
                  >
                    <option value="French">French</option>
                    <option value="English">English</option>
                    <option value="Arabic">Arabe</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="search">
              <input
                className="input"
                type="text"
                placeholder="Search a word"
                required
                spellCheck="false"
                onKeyDown={searchInput}
              />
              <i className="fas fa-search">
                <ImSearch />
              </i>
              <span className="material-icons" onClick={removeIcon}>
                <CgClose />
              </span>
            </div>
            <p className="info-text">{message}</p>
            <ul>
              <li className="word">
                <div className="details">
                  <p>{wordtraduction}</p>
                </div>
                <i
                  className="fas fa-volume-up"
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(wordtraduction);
                    // console.log(utterance.lang);
                    if (ToLanguages === "English") utterance.lang = "en-GB";
                    else if (ToLanguages === "Frensh") utterance.lang = "fr-FR";
                    else utterance.lang = "ar-AR";
                    speechSynthesis.speak(utterance);
                  }}
                >
                  <FaVolumeUp />
                </i>
              </li>
              <div className="content">
                <li className="meaning">
                  <div className="details">
                    <p>Description</p>
                    <span>{wordDescription}</span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Translate;
