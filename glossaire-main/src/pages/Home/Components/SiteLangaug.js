import React from 'react'
// import './SiteLangauge.css'
const SiteLangauge = (prop) => {
  const { setsitelangauge } = prop
  const handlesitelangauge = (e) => {
    localStorage.setItem("sitelangauge", e.target.value)
    setsitelangauge(e.target.value)
  }
  return (
    <div className='sitelang'>

      <select id='selection' defaultValue={"langauge"} onChange={handlesitelangauge} className="Elm-Sel1 sitelan_sel">
        <option value="French" >francais</option>
        <option value="English">English</option>
        <option value="Arabic">العربية</option>
      </select>
    </div>
  )
}
export default SiteLangauge