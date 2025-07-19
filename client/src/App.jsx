import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    async function grabData() {
      const response = axios.get("http://localhost:3000");
    }
    grabData();

  }, []);

  return (
    <>
      
    </>
  )
}



export default App
