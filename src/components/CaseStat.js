import React, { useState,useEffect } from "react";
import axios from 'axios';
import {
    BarChart,
    Bar,
    Legend,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
  } from 'recharts';

function CaseStat(){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function CaseStatFetching() {
    setIsLoading(true)
    const url = 'https://covid19-cdn.workpointnews.com/api/v2/cases.json'
    const response = await axios.get(url);
    setData(response.data)
    setIsLoading(false)
  }

  console.log(
      data && data.records && data.records.map(item =>{
        if (item.gender === "ชาย") {
            item.gender1 = item.gender || "ชาย";
          } else if (item.gender === "หญิง") {
            item.gender2 = item.gender || "หญิง";
          }
        return item;
        })
    )  

  useEffect(() => {
    CaseStatFetching();
  }, []);
    
  return (
    <>
    {/* <ResponsiveContainer>
        {isLoading && <div> Loading ... </div> }
        {!isLoading && data !== undefined && 
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={data.records} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="gender" fill="#8884d8" />
                <Bar dataKey="age" fill="#82ca9d" />
            </BarChart>
        }
    </ResponsiveContainer> */}
    </>
  )
}

export default CaseStat;