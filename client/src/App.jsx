import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    async function grabData() {
      const response = await axios.get("http://localhost:3000/entrees");
      if (response.status === 200) {
        setData(response.data);
      }
    };

    grabData();

  }, []);

  return (
    <>
      
    </>
  )
}



export default App
