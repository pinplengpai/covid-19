import React, { useState,useEffect } from "react";
import axios from 'axios';
import { Text, Section, Element } from '.././styles/index';
import * as Bgheadline2 from  './images/bgheadline2.png'
import * as Gradiant from  './images/gradiant.png'

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
          <Text><h2 style={{ fontWeight: 'bold' }}>Trend of cases in Thailand</h2></Text>
          <Section bgcolor={'#d4d5d6'} style={{ paddingTop: '3%', marginTop: '4%'}}>
          <Element url={Bgheadline2} left={'-5%'} top={'-64%'} width={'539px'} height={'322px'} zindex={'-1'}/> 
          <Element url={Gradiant} right={'-6%'} top={'-27%'} width={'353px'} height={'307px'} zindex={'2'}/> 
            <ResponsiveContainer width="85%" height={500}>
                <LineChart width={700} height={500} data={data.Thailand}>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="confirmed" stroke="#3A5335" />
                    <Line type="monotone" dataKey="deaths" stroke="#87A08B" />
                    <Line type="monotone" dataKey="recovered" stroke="#60A41F" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
          </Section>
    </div>
        
  )
}

export default ThaiTimeSeries;