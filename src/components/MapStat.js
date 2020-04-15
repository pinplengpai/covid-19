import React, { useState,useEffect } from "react";
import { GeoChart } from 'react-chartkick'
import 'chart.js'


function MapStat(){
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
      MapStatFetching();
    }, []);
  

      
    return (
      <>
      
       </>
    )
  }
  // 
  export default MapStat