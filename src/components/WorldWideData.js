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

const Box = styled.div`
  display: flex;
  justify-content: space-around;
`

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
                <Row gutter={[16, 16]}  style={{ marginTop: '3%' }}>
                {isLoading && <div> Loading ... </div> }
                {!isLoading && data.Global !== undefined && 
                    <Box>
                        <Col xl={8} sm={12}><ReportCard title="New Cases" bordered={false} style={{ 'background-color': '#9DB4CC' }}>
                            <p>{data.Global.NewConfirmed}</p></ReportCard>
                        </Col>
                        <Col xl={8} sm={12}><ReportCard title="Total confirmed" bordered={false} style={{ 'background-color': '#C6AFA3' }}>
                            <p>{data.Global.TotalConfirmed}</p></ReportCard>
                        </Col>
                        <Col xl={8} sm={12}><ReportCard title="New Deaths" bordered={false} style={{ 'background-color': '#d3adba' }}>
                            <p>{data.Global.NewDeaths}</p></ReportCard>
                        </Col>

                    </Box>
                }
                </Row>
                <Row gutter={[16, 16]}>
                    {data.Global !== undefined && 
                    <Box>
                        <Col xl={8} sm={12}><ReportCard title="Total Deaths" bordered={false} style={{ 'background-color': '#B78798' }}>
                            <p>{data.Global.TotalDeaths}</p></ReportCard>
                        </Col>
                        <Col xl={8} sm={12}><ReportCard title="New Recovered" bordered={false} style={{ 'background-color': '#cce0d6' }}>
                            <p>{data.Global.NewRecovered}</p></ReportCard>
                        </Col>
                        <Col xl={8} sm={12}><ReportCard title="Total Recovered" bordered={false} style={{ 'background-color': '#A2C4B4' }}>
                            <p>{data.Global.TotalRecovered}</p></ReportCard>
                        </Col>
                    </Box>
                    }           
                </Row>

                <ResponsiveContainer width="90%" height={500}>
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