import React from 'react';
import {
    ScatterChart,
    Scatter,
    Legend,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
  } from 'recharts';

const ScatterData = React.memo(({data}) => {
    return(
        <ResponsiveContainer width="90%" height={500}>
           <ScatterChart width={730} height={250}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="TotalConfirmed" name="Total Confirmed"  />
                <YAxis dataKey="TotalDeaths" name="Total Deaths" />
                {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Country" data={data.Countries} fill="#8884d8" />
                {/* <Scatter name="B school" data={data02} fill="#82ca9d" /> */}
            </ScatterChart>
        </ResponsiveContainer>
    )
});


export default ScatterData