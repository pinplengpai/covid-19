import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { Row, Col} from 'antd';
import { ReportCard, ContentContainer,Box, Text } from '.././styles/index';
import DataChart from './DataChart';
import BarChart from './BarChart';
import Chart from "react-google-charts";


function WorldWide() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function GlobalData() {
        setIsLoading(true)
        const url = 'https://covid19-cdn.workpointnews.com/api/world.json'
        const response = await axios.get(url);
        setData(response.data)
        setIsLoading(false)
    }
    
    function FormatDataMap(item){
        if( !item ) {return;}
        return ([
                item.name, 
                item.confirmed, 
                item.deaths
            ]
         )
    }
    
    const dataCountry = data && data.statistics && data.statistics.map(item => FormatDataMap(item))
    const headline = [['country', 'confirmed', 'deaths']]
    const dataMap = headline.concat(dataCountry)

    useEffect(() => {
        GlobalData();
    }, []);
          
    return(
        <>
        <Header />
            <ContentContainer>
                <Text style={{ marginTop: '3%' }}><h2>Coronavirus Updated Worldwide</h2></Text>
                <Row style={{ marginTop: '1%' }}>
                {isLoading && <div> Loading ... </div> }
                {!isLoading && data !== undefined && 
                    <Box>
                        <Col xl={8}><ReportCard title="Total Deaths" bordered={false}  bgcolor={'#9DB4CC'} >
                            <p>{data.totalDeaths}</p></ReportCard>
                        </Col>
                        <Col xl={8}><ReportCard title="Total confirmed" bordered={false} bgcolor={'#C6AFA3'} >
                            <p>{data.totalConfirmed}</p></ReportCard>
                        </Col>
                        <Col xl={8}><ReportCard title="Total Recovered" bordered={false} bgcolor={'#d3adba'} >
                            <p>{data.totalRecovered}</p></ReportCard>
                        </Col>
                    </Box>
                }
                </Row>
                 <Chart
                    width={'800px'}
                    height={'300px'}
                    chartType="GeoChart"
                    data={dataMap}
                    mapsApiKey="AIzaSyArgjkn7FWZuE_5ROT4iyEu5ZNZJU8M2wQ"
                    rootProps={{ 'data-testid': '1' }}
                 />
                <DataChart data={data && data.statistics && data.statistics.name}/>
                <BarChart data={data && data.statistics && data.statistics.name} />
            </ContentContainer>    
                   
        </>
    )
}

export default WorldWide