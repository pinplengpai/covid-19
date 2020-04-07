import React, { useState,useEffect } from "react";
import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
  } from 'recharts';

function TimeSeries(){
  const [data, setData] = useState([]);

  async function TimeSeriesFetching() {
    const url = 'https://pomber.github.io/covid19/timeseries.json'
    const response = await axios.get(url);
    setData(response.data);
  }

  useEffect(() => {
    TimeSeriesFetching();
  }, []);
    
  return (
//   <p>{JSON.stringify(data.Thailand)}</p>
    <div>
        <h2>Trend of cases in Thailand</h2>
        <ResponsiveContainer width="100%" height={500}>
            <LineChart width={800} height={500} data={data.Thailand}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
                <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
                <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </div>
        
  )
}

export default TimeSeries;