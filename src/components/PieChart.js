import React, { useState,useEffect } from "react";
import axios from 'axios';
import {
    PieChart,
    Pie,
    ResponsiveContainer
  } from 'recharts';

function PieStat(){
  const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

  async function PieFetching() {
    // setIsLoading(true)
    const url = 'https://covid19-cdn.workpointnews.com/api/v2/cases.json'
    const response = await axios.get(url);
    setData(response.data)
    // setIsLoading(false)
  }


  useEffect(() => {
    PieFetching();
  }, []);
    
  return (
    <>
    {/* // <ResponsiveContainer>
    //     <PieChart width={730} height={250}>
    //         <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    //         <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    //     </PieChart>
    // </ResponsiveContainer> */}
    </>
  )
}


export default PieStat;