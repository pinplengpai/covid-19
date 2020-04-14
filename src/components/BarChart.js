import React from 'react';
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



const BarDataChart = React.memo(({data}) => {
    return(
        <ResponsiveContainer width="90%" height={500}>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="TotalDeaths" fill="#82ca9d" />
                {/* <Bar dataKey="NewDeaths" fill="#82ca9d" /> */}
            </BarChart>
        </ResponsiveContainer>
    )
})

export default BarDataChart