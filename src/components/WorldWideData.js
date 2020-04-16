import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { Row, Col} from 'antd';
import { ReportCard, ContentContainer,Box, MiniBox} from '.././styles/index';
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
        if( !item ) { return;}
        return ([
                item.name, 
                item.confirmed, 
                item.deaths
            ]
         )
    }
    const dataCountry =[];
         dataCountry = data && data.statistics && data.statistics.map(item => FormatDataMap(item))
    const headline = ['country', 'confirmed', 'deaths']
        dataCountry.push(headline)
        
          
    console.log("dataCountry", dataCountry);
    

    // [
    //     ['Country', 'Confirmed', 'Deaths'],
    //     ['Germany', 200, 400]    
    //   ]

    useEffect(() => {
        GlobalData();
    }, []);
          
    return(
        <>
        <Header />
            <ContentContainer>
                <Row style={{ marginTop: '3%' }}>
                {isLoading && <div> Loading ... </div> }
                {!isLoading && data !== undefined && 
                    <Box>
                        <Col span={8}><ReportCard title="Total Deaths" bordered={false}  bgcolor={'#9DB4CC'} >
                            <p>{data.totalDeaths}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="Total confirmed" bordered={false} bgcolor={'#C6AFA3'} >
                            <p>{data.totalConfirmed}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="Total Recovered" bordered={false} bgcolor={'#d3adba'} >
                            <p>{data.totalRecovered}</p></ReportCard>
                        </Col>
                    </Box>
                }
                </Row>
                 {/* <Chart
                    width={'800px'}
                    height={'300px'}
                    chartType="GeoChart"
                    data={}
                    
                    mapsApiKey="AIzaSyBCFqEMwJ1lIVoNWA77z15a8jWOc86KQEY"
                    rootProps={{ 'data-testid': '1' }}
                 /> */}
                <DataChart data={data.Countries}/>

                <BarChart data={data.Countries} />

                <Row>
                        <Col xl={6} sm={12}>  
                            <MiniBox />
                        </Col>
                        <Col xl={6} sm={12}>
                        
                            <MiniBox style={{ backgroundColor: 'red' }}/>
                        </Col>
                        <Col xl={6} sm={12}>
                        
                            <MiniBox style={{ backgroundColor: 'yellow' }}/>
                        </Col>
                        <Col xl={6} sm={12}>
                            <MiniBox style={{ backgroundColor: 'green' }}/>
                        </Col>
                </Row>    

            </ContentContainer>    
                   
        </>
    )
}

export default WorldWide