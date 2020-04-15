import React, { useState, useEffect } from "react";
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

function CaseStat() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function CaseStatFetching() {
    setIsLoading(true)
    const url = 'https://covid19-cdn.workpointnews.com/api/v2/cases.json'
    const response = await axios.get(url);
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    CaseStatFetching();
  }, []);

  let maleCount = 0
  let femaleCount = 0
  let nullCount = 0

  data && data.records && data.records.map(item => {
    if (item.gender === "ชาย") {
      maleCount++
    } else if (item.gender === "หญิง") {
      femaleCount++
    } else if (item.gender === null) {
      nullCount++
    }
  })
  const genderCount = [{ "male": maleCount, "female": femaleCount, "nonbinary": nullCount }];
  // const genderCount = [{ "male": 12345, "female": 4021, "nonbinary": 45712 }]
  const test = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];
  console.log(genderCount)
  // console.log(genderCount)
  // let number = ata && data.records && data.records.map(item =>{
  //   if (item.gender === "ชาย") {
  //       item.gender1 = item.gender || "ชาย";
  //     } else if (item.gender === "หญิง"){
  //       item.gender2 = item.gender || "หญิง";
  //     } else if (item.gender === "null"){
  //       item.gender3 = item.gender || "null";
  //     }
  //   return item;
  //   })

  // let female = data && data.records && data.records.map(item =>{
  //   if (item.gender === "หญิง") {
  //       item.gender2 = item.gender || "หญิง";
  //     } 
  //   return item.gender2;
  //   })

  // let unknown = data && data.records && data.records.map(item =>{
  //   if (item.gender === "null") {
  //   item.gender3 = item.gender || "null";
  //   } 
  //   return item.gender3;
  // })

  // console.log(unknown)


  // const unknown = data && data.records && data.records.map(item =>{
  //   if (item.gender === "null") {
  //       item.gender3 = item.gender || "null";
  //     } 
  //   return item.gender3;
  //   })


  /* data && data.records && data.records.map(item =>{
      if (item.gender === "ชาย") {
          item.gender1 = item.gender || "ชาย";
        } else if (item.gender === "หญิง") {
          item.gender2 = item.gender || "หญิง";
        }
      return item.gender;
      })
  */


  return (
    <>
      <>
        {isLoading && <div> Loading ... </div>}
        {!isLoading && genderCount &&
          <BarChart width={730} height={250} data={genderCount}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="gender" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="male" fill="#8884d8" />
            <Bar dataKey="female" fill="#82ca9d" />
            <Bar dataKey="nonbinary" fill="#82ca9d" />
          </BarChart>
        }
      </>
    </>
  )
}
export default CaseStat