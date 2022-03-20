import React, { useEffect, useState } from "react"
import './Home.css'
import SearchHome from "./SearchHome";




const Home = () => {
  const [message,setmessage]=useState("")
  const [word,setword]=useState([])

  const fetchData=async(value)=>{

    try {
      
      const response=  await fetch('http://localhost:5000/query',
       {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ word: value})  
      })

    
     const data =await response.json()
     console.log(data);
     if (data.success) {
       setword(data.msg)
       console.log(data.msg);
    } else {
      setmessage("word not foud")
    }
  } catch (error) {
    setmessage("word not found")

  }
  }
  
  const getSearchValue=(e,value)=>{
     e.preventDefault()
  
     fetchData(value)
  }


  return (
    <div>

      <SearchHome getSearchValue={getSearchValue} setmessage={setmessage}  /> 
      <div className="maginbottom">
        <button onClick={fetchData}> get Data</button>
      </div>
    </div>
  )
}

export default Home

// const Home = () => {

  
//   const hanleSearchvalue = (value) => {
//     console.log(value);
//   }

//   return (
//     <div>
//       <div className="maginbottom">

//       </div>
//       <Search hanleSearchvalue={hanleSearchvalue} />

//     </div>
//   )
// }

// export default Home


// menu.forEach(function(obj) {
//   db.collection("menu").add({
//       id: obj.id,
//       name: obj.name,
//       description: obj.description,
//       price: obj.price,
//       type: obj.type
//   }).then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });
// });


// const senddata = async () => {
//   menu.forEach(async (obj) => {
//     try {

//       const docRef = await addDoc(collection(db, "glossaire"), {
//         French: obj.French,
//         English: obj.English,
//         Arabic: obj.Arabic,
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   })
// }
// useEffect(() => {
//   senddata()
// }, [])