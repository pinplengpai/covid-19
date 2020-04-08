import React, { useState, useEffect }from 'react';
import Header from './Header';
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
import styled , { css } from 'styled-components';
import { Row, Col } from 'antd'
import { ReportCard, ContentContainer} from '.././styles/index';


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
            <ContentContainer>
                <h2>WorldWide</h2>
                <Row gutter={[16, 16]}  style={{ marginTop: '3%' }}>
                {isLoading && <div> Loading ... </div> }
                {!isLoading && data.Global !== undefined && 
                    <Box>
                        <Col xl={6} sm={12}><ReportCard title="Total Cases" bordered={false} style={{ 'background-color': '#c6afa3' }}></ReportCard><p>- {data.Global.NewConfirmed}</p></Col>
                        <p>Total confirmed - {data.Global.TotalConfirmed}</p>
                        <p>New Deaths - {data.Global.NewDeaths}</p>
                        <p>Total Deaths - {data.Global.TotalDeaths}</p>
                        <p>New Recovered - {data.Global.NewRecovered}</p>
                        <p>Total Recovered - {data.Global.TotalRecovered}</p>  
                    </Box>
                }
                </Row>
    

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
            </ContentContainer>           
        </>
    )
}

export default WorldWide