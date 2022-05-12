import React from 'react'
// import './SiteLangauge.css'
import { useHomeContext } from '../Homecontext'
// import { sherdSiteLangauge } from "../Home"
const SiteLangauge = () => {
  const { setsitelangauge, sitelangauge } = useHomeContext()

  // const { setsitelangauge } = prop
  const handlesitelangauge = (e) => {
    localStorage.setItem("sitelangauge", e.target.value)
    setsitelangauge(e.target.value)
    console.log(localStorage.getItem("sitelangauge"));
  }
  return (
    <div className='sitelang'>

      <select id='selection' defaultValue={sitelangauge} onChange={handlesitelangauge} className="Elm-Sel1 sitelan_sel">
        <option value="French" >francais</option>
        <option value="English">English</option>
        <option value="Arabic">العربية</option>
      </select>
    </div>
  )
}
export default SiteLangauge