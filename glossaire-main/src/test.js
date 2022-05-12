import React, { useEffect } from "react";
import axios from "axios";

const App1 = () => {






  const handleSubmit = async () => {
    // axios
    //   .get("http://127.0.0.1:8000/backend/")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => { });

    const response = await fetch('http://127.0.0.1:8000/query/eiiweio/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        // body: JSON.stringify({ English: 'test1yes', French: 'test1yes', Arabic: 'testyes' })
      })
    const answer = await response.json()
    console.log(answer);
  };

  useEffect(() => {

  }, [])
  return (
    <button onClick={handleSubmit} >add</button >
  );
}
export default App1;
