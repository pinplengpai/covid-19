import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Row, Col} from 'antd';
import { ReportCard, ContentContainer,Box, Text,Element } from '.././styles/index';
import Loading from './Loading';
import Chart from "react-google-charts";
import * as Underline2 from  './images/underline2.png'
import * as Underline3 from  './images/underline3.png'
import * as Confirmed1 from  './images/confirmed1.png'
import * as Death1 from  './images/death1.png'
import * as Recover1 from  './images/recover1.png'
import * as Gradiant1 from  './images/gradiant1.png'

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
            {isLoading && <div><Loading/></div> }
            {!isLoading && data !== undefined && 
             <>
                <Text style={{ marginTop: '3%' }}><h2 style={{ fontWeight: 'bold' }}>Coronavirus Updated Worldwide</h2></Text>
                <Element  style={{ transform: 'rotate(6deg)'}} url={Underline2} left={'1%'} top={'-14%'} width={'447px'} height={'276px'} zindex={'-1'}/> 
                <Row  gutter={[16, 16]} style={{ marginTop: '5%' }}>
                    <Col xl={8}>
                        <Element url={Confirmed1} top={'35%'} right={'4%'} width={'115px'} height={'111px'} zindex={'2'}/> 
                        <ReportCard title="Total confirmed" bordered={false} bgcolor={'#87A08B'} >
                            <p>{data.totalConfirmed}</p>
                        </ReportCard> 
                    </Col>
                    <Col xl={8}>
                        <Element url={Recover1} top={'-25%'} left={'1%'} width={'152px'} height={'144px'} zindex={'2'}/> 
                        <ReportCard title="Total Recovered" bordered={false} bgcolor={'#8AA15F'} >
                            <p>{data.totalRecovered}</p>
                        </ReportCard>
                    </Col>
                    <Col xl={8}>
                        <Element url={Death1} bottom={'-21%'} left={'-9%'} width={'155px'} height={'149px'} zindex={'2'}/> 
                        <ReportCard title="Total Deaths" bordered={false}  bgcolor={'#3A5335'} >
                            <p>{data.totalDeaths}</p>
                        </ReportCard>
                    </Col>
                </Row>
                <Row style={{ marginTop: '3%' }}>
                    <Text style={{ marginTop: '3%' }}><h2 style={{ fontWeight: 'bold' }}>Tracking the Global Outbreak</h2></Text>
                    <Element style={{ transform: 'rotate(6deg)'}} url={Underline3} top={'20.5%'} width={'439px'} height={'289px'} zindex={'2'}/> 
                    <Col xl={24} style={{ display: 'flex', justifyContent:'center' }} >
                        <Box style={{ marginTop: '5%' }}>
                        <Element url={Gradiant1} top={'-10%'} right={'-5%'} width={'358px'} height={'335px'} zindex={'2'}/> 
                        <Chart
                            width={'1300px'}
                            height={'700px'}
                            chartType="GeoChart"
                            data={dataMap}
                            mapsApiKey="AIzaSyDV6kiNfxxVMwke9PjKQ6YkrZKWMky2-kA"
                            rootProps={{ 'data-testid': '1' }}
                            options={{
                                colorAxis: { colors: ['#9C9F81','#6D805E','#181B0E'] },
                                backgroundColor: "#D2D6A8",
                                borderRadius:"5px"
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

export default WorldWide