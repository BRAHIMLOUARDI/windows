import React from "react";
import logo from "./fsdm.jpg";
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img className="logo_fsdm" src={logo} alt="logo" />
      </a>
      <input type="checkbox" id="menu-bar" />
      <label name="menu-bar">Menu</label>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/Translate" id="test">
              Translate Sentence
            </Link>
            {/* <a href="#" id="test">
              Translate Sentence
            </a> */}
          </li>
          <li>
            <a href="#">Language {">"}</a>
            <ul>
              <li>
                <input type="radio" name="language" id="English" /> English
                <br />
              </li>
              <li>
                <input type="radio" name="language" id="Frensh" /> Francais
                <br />
              </li>
              <li>
                <input type="radio" name="language" id="Arabe" /> عربية <br />
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
