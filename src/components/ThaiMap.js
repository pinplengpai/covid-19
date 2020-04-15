import React, { useState,useEffect } from "react";
import axios from 'axios';
import Chart from "react-google-charts";


function CaseStat(){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function CaseStatFetching() {
    setIsLoading(true)
    const url = 'https://covid19-cdn.workpointnews.com/api/constants.json?'
    const response = await axios.get(url);
    setData(response.data)
    setIsLoading(false)
  }
  
  useEffect(() => {
    CaseStatFetching();
  }, []);

   

    
  return (
    <Chart
    width={'500px'}
    height={'300px'}
    chartType="GeoChart"
    data={[
        ['Country', 'Total Confirmed', 'Total Recovered', 'Total Deaths'],
        [data.statistics.name, data.statistics.confirmed, data.statistics.recovered, data.statistics.deaths],
    ]}
    
    mapsApiKey="AIzaSyBCFqEMwJ1lIVoNWA77z15a8jWOc86KQEY"
    rootProps={{ 'data-testid': '1' }}
 />
  )
// 
export default ThaiMap