import React, { useState,useEffect } from "react";
import axios from 'axios';

function DataFetching(){
  const [data, setData] = useState([]);

  async function ConstantDataThai() {
    const url = 'https://covid19-cdn.workpointnews.com/api/constants.json?'
    const response = await axios.get(url);
    setData(response.data)
    // setData(Object.entries(response.data))
  }

  useEffect(() => {
    ConstantDataThai();
  }, []);
    
  return (
    <div>
      <p>Total cases: {data.ผู้ติดเชื้อ}</p>
      <p>Recovered: {data.หายแล้ว}</p>
      <p>Deaths: {data.เสียชีวิต}</p>
      <p>Today: {data.โน๊ตผู้ติดเชื้อ}</p>
        {/* <ul>
        {data && data.map((data, key) => <li key={key}> Deaths: {(data[1].deaths)}</li>)}

      </ul> */}
    </div>
   
  )
}

export default DataFetching;