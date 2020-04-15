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
  
  useEffect(() => {
    CaseStatFetching();
  }, []);

    let maleCount = 0
    let femaleCount = 0
    let nullCount = 0

    data && data.records && data.records.map(item =>{
      if(item.gender === "ชาย") {
        maleCount++
      } else if (item.gender === "หญิง") {
        femaleCount++
      } else if (item.gender === null) {
        nullCount ++ 
      }
    })
    console.log(maleCount, femaleCount, nullCount)
    const genderCount = [{"male":maleCount, "female":femaleCount, "undefined":nullCount}];
  // console.log(male.count)

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
     <ResponsiveContainer>
        {isLoading && <div> Loading ... </div> }
         {!isLoading && data !== undefined && 
            <BarChart width={730} height={250} data={genderCount}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="male" name="male" fill="#8884d8" />
                <Bar dataKey="female" name="female" fill="#82ca9d" />
                <Bar dataKey="undefined" name="undefined" fill="#82ca9d" /> 
            </BarChart>
         }
    </ResponsiveContainer> 
     </>
  )
}
// 
export default CaseStat