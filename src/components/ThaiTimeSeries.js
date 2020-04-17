import React, { useState,useEffect } from "react";
import axios from 'axios';
import { Text } from '.././styles/index';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
  } from 'recharts';

function ThaiTimeSeries(){
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
    <div>
        <Text><h2>Trend of cases in Thailand</h2></Text>
          <ResponsiveContainer width="85%" height={500}>
              <LineChart width={700} height={500} data={data.Thailand}>
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <Line type="monotone" dataKey="confirmed" stroke="#EF6C30" />
                  <Line type="monotone" dataKey="deaths" stroke="#E0582C" />
                  <Line type="monotone" dataKey="recovered" stroke="#F07743" />
                  <Tooltip />
              </LineChart>
          </ResponsiveContainer>
    </div>
        
  )
}

export default ThaiTimeSeries;