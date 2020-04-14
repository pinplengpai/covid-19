import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
  } from 'recharts';

const DataChart = React.memo(({data}) => {
    return(
        <ResponsiveContainer width="90%" height={500}>
            <LineChart width={800} height={500} data={data}>
                <XAxis dataKey="Country"/>
                <YAxis/>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="TotalConfirmed" stroke="#8884d8" />
                <Line type="monotone" dataKey="TotalDeaths" stroke="#82ca9d" />
                <Line type="monotone" dataKey="TotalRecovered" stroke="#82ca9d" />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
})

export default DataChart 



