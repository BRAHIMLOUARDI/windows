import React, { useContext, useEffect, useState, useRef } from 'react'

const HomeContext = React.createContext()


const url =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=";

const HomeProvider = ({ children }) => {

  const [contents, setContents] = useState([]);


  const [isopen, setisopen] = useState(false)
  const [wordtraduction, setwordtraduction] = useState("")

  const selection1 = useRef()
  const selection2 = useRef()

  const extractAPIContents = json => {
    const { pages } = json.query;
    return Object.keys(pages).map(id => pages[id].extract);
  };

  const getContents = async (value) => {
    let resp;
    let contents = [];

    try {
      resp = await fetch(`${url}${value}`);
      const json = await resp.json();
      contents = extractAPIContents(json);
    } catch (err) {

    }
    setContents(contents);
  };
  const value = {
    isopen,
    setisopen,
    wordtraduction,
    setwordtraduction,
    selection1,
    selection2,
    getContents,
    contents,

  }
  useEffect(() => {
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