import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Row, Col} from 'antd';
import { ReportCard, ContentContainer,Box, Text,Element } from '.././styles/index';
import Loading from './Loading';
import Chart from "react-google-charts";
import * as Bgheadline from  './images/bgheadline.png'
import * as Bgheadline1 from  './images/bgheadline1.png'
// import * as Rip from './images/rip.png'
// import * as Recovered from './images/recoverd.png'
// import * as Confirmed from './images/confirmed.png'
// import * as Gradiant1 from  './images/gradiant1.png'

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
                <Element url={Bgheadline} left={'-5%'} top={'-21%'} width={'579px'} height={'332px'} zindex={'-1'}/> 
                <Row  gutter={[16, 16]} style={{ marginTop: '5%' }}>
                    <Col xl={8}>
                        {/* <Element url={Confirmed} top={'35%'} right={'4%'} width={'115px'} height={'111px'} zindex={'2'}/>  */}
                        <ReportCard title="Total confirmed" bordered={false} bgcolor={'#87A08B'} >
                            <p>{data.totalConfirmed}</p>
                        </ReportCard> 
                    </Col>
                    <Col xl={8}>
                        {/* <Element url={Recovered} top={'-25%'} left={'1%'} width={'152px'} height={'144px'} zindex={'2'}/>  */}
                        <ReportCard title="Total Recovered" bordered={false} bgcolor={'#8AA15F'} >
                            <p>{data.totalRecovered}</p>
                        </ReportCard>
                    </Col>
                    <Col xl={8}>
                        {/* <Element url={Rip} bottom={'-21%'} left={'-9%'} width={'155px'} height={'149px'} zindex={'2'}/>  */}
                        <ReportCard title="Total Deaths" bordered={false}  bgcolor={'#3A5335'} >
                            <p>{data.totalDeaths}</p>
                        </ReportCard>
                    </Col>
                </Row>
                <Row style={{ marginTop: '3%' }}>
                    <Text style={{ marginTop: '3%' }}><h2 style={{ fontWeight: 'bold' }}>Tracking the Global Outbreak</h2></Text>
                    <Element url={Bgheadline1} left={'-5%'} top={'13%'} width={'578px'} height={'336px'} zindex={'-1'}/> 
                    <Col xl={24} style={{ display: 'flex', justifyContent:'center' }} >
                        <Box style={{ marginTop: '5%' }}>
                        {/* <Element url={Gradiant1} top={'-10%'} right={'-5%'} width={'358px'} height={'335px'} zindex={'2'}/>  */}
                        <Chart
                            width={'1300px'}
                            height={'700px'}
                            chartType="GeoChart"
                            data={dataMap}
                            mapsApiKey="AIzaSyDV6kiNfxxVMwke9PjKQ6YkrZKWMky2-kA"
                            rootProps={{ 'data-testid': '1' }}
                            options={{
                                colorAxis: { colors: ['#9C9F81','#6D805E','#181B0E'] },
                                backgroundColor: "transparent",
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