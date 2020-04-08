import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function WorldWide() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  async function GlobalData() {
    setIsLoading(true)
    const url = 'https://api.covid19api.com/summary'
    const response = await axios.get(url);
    // setData(Object.entries(response.data))
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    GlobalData();
  }, []);

  console.log(data.Global !== undefined && data.Global.TotalConfirmed)

  return (
    <>
      <Header />
      {isLoading && <div>Loading...</div>}
      {!isLoading && data.Global !== undefined && <p>{data.Global.TotalConfirmed}</p>}
      <div>
        WorldWide
        {/* <p>New confirmed - {data && data[0] && data[0][1].NewConfirmed}</p>
        <p>Total confirmed - {data && data[0] && data[0][1].TotalConfirmed}</p>
        <p>New Deaths - {data && data[0] && data[0][1].NewDeaths}</p>
        <p>Total Deaths - {data && data[0] && data[0][1].TotalDeaths}</p>
        <p>New Recovered - {data && data[0] && data[0][1].NewRecovered}</p>
        <p>Total Recovered - {data && data[0] && data[0][1].TotalRecovered}</p> */}
      </div>
    </>
  )
}

export default WorldWide