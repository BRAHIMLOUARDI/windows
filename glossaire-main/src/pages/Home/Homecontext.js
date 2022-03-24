import React, { useContext, useEffect, useState, useRef } from 'react'

const HomeContext = React.createContext()
const HomeProvider = ({ children }) => {
  // isopen refer to the translation card
  const [isopen, setisopen] = useState(false)
  const [wordtraduction, setwordtraduction] = useState("")

  const selection1 = useRef()
  const selection2 = useRef()

  const value = {
    isopen,
    setisopen,
    wordtraduction,
    setwordtraduction,
    selection1,
    selection2
  }
  useEffect(() => {
    console.log(selection2.current.value, wordtraduction);
  }, [wordtraduction])
  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  )
}



export const useHomeContext = () => {
  return useContext(HomeContext)
}


export { HomeProvider, HomeContext }