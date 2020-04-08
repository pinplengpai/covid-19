import React, { useState, useEffect }from 'react';
import Header from './Header';
import { Loading } from '../styles/index'
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


function WorldWide() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function GlobalData() {
        setIsLoading(true)
        const url = 'https://api.covid19api.com/summary'
        const response = await axios.get(url);
        setData(response.data)
        setIsLoading(false)
    }
    
    useEffect(() => {
        GlobalData();
    }, []);
          
    return(
        <>
            <Header />
            <div> 
                <h2>WorldWide</h2>
                {isLoading && <div><Loading /> </div> }
                {!isLoading && data.Global !== undefined && <p>New confirmed - {data.Global.TotalConfirmed}</p>}
                {/* <p>Total confirmed - {data && data[0] && data[0][1].TotalConfirmed}</p>
                <p>New Deaths - {data && data[0] && data[0][1].NewDeaths}</p>
                <p>Total Deaths - {data && data[0] && data[0][1].TotalDeaths}</p>
                <p>New Recovered - {data && data[0] && data[0][1].NewRecovered}</p>
                <p>Total Recovered - {data && data[0] && data[0][1].TotalRecovered}</p>   */}
            </div>

                <ResponsiveContainer width="100%" height={500}>
                    <LineChart width={800} height={500} data={data.Countries}>
                        <XAxis dataKey="Country"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="TotalConfirmed" stroke="#8884d8" />
                        <Line type="monotone" dataKey="TotalDeaths" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="TotalRecovered" stroke="#82ca9d" />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

             <p>{JSON.stringify(data)}</p>
            
        </>
    )
}

export default WorldWide