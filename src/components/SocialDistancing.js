import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Row, Col} from 'antd';
import { ReportCard, ContentContainer,Box, Text } from '.././styles/index';
import Loading from './Loading';
import Chart from "react-google-charts";


function SocialDistancingPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function SocialDistancingData() {
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
        SocialDistancingData();
    }, []);
          
    return(
        <>
        <Header />
            <ContentContainer>
            {isLoading && <div><Loading/></div> }
            {!isLoading && data !== undefined && 
             <>
                <Text style={{ marginTop: '3%' }}><h2>Coronavirus Updated Worldwide</h2></Text>
                <Row  gutter={[16, 16]} style={{ marginTop: '1%' }}>
                    <Col xl={8}>
                        <ReportCard title="Total confirmed" bordered={false} bgcolor={'#F18A6A'} >
                            <p>{data.totalConfirmed}</p>
                        </ReportCard> 
                    </Col>
                    <Col xl={8}>
                        <ReportCard title="Total Recovered" bordered={false} bgcolor={'#EF7049'} >
                            <p>{data.totalRecovered}</p>
                        </ReportCard>
                    </Col>
                    <Col xl={8}>
                        <ReportCard title="Total Deaths" bordered={false}  bgcolor={'#E0582C'} >
                            <p>{data.totalDeaths}</p>
                        </ReportCard>
                    </Col>
                </Row>
                <Row style={{ marginTop: '3%' }}>
                    <Text><h2>Tracking the Global Outbreak</h2></Text>
                    <Col xl={24} style={{ display: 'flex', justifyContent:'center' }} >
                        <Box>
                        <Chart
                            width={'1300px'}
                            height={'700px'}
                            chartType="GeoChart"
                            data={dataMap}
                            mapsApiKey="AIzaSyDV6kiNfxxVMwke9PjKQ6YkrZKWMky2-kA"
                            rootProps={{ 'data-testid': '1' }}
                            options={{
                                colorAxis: { colors: ['#F17E30','#CB4027','#BC3623'] },
                                backgroundColor: "#F8C392"
                            }}
                        />
                        </Box>
                    </Col>
                 </Row>
                </>
            }
         </ContentContainer>  
         <Footer />
 
         </> 
    )
}

export default SocialDistancingPage