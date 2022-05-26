import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import "./Dashboard.css"
import Editword from "./Editword"


export default function Dashboard() {


  return (
    <>

      <Navbar />
      <div className="operation-link-container">
        <Link to="/admin/edit">
          Edit a word
        </Link>
        <Link to="/admin/create">
          Create a word
        </Link>
      </div>


    </>
  )
}


