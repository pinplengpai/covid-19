import React, { useState,useEffect } from "react";
import Header from './Header';
import ThaiTimeSeries from './ThaiTimeSeries';
import axios from 'axios';


function ThaiData(){
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);

  async function ConstantDataThai() {
    const url = 'https://covid19-cdn.workpointnews.com/api/constants.json?'
    const response = await axios.get(url);
    setData(response.data)
    isLoading(false)
  }

  useEffect(() => {
    ConstantDataThai();
  }, []);
    
  return (
    <div className='container'>
      <Header />
        <p>Total cases: {data.ผู้ติดเชื้อ}</p>
        <p>Recovered: {data.หายแล้ว}</p>
        <p>Deaths: {data.เสียชีวิต}</p>
        <p>Today: {data.โน๊ตผู้ติดเชื้อ}</p>
      <ThaiTimeSeries />

        {/* <ul>
        {data && data.map((data, key) => <li key={key}> Deaths: {(data[1].deaths)}</li>)}

      </ul> */}
    </div>
   
  )
}

export default ThaiData;