import React, { useState, useEffect }from 'react';
import Header from './Header';
import axios from 'axios';
import { Row, Col} from 'antd';
import { ReportCard, ContentContainer,Box, MiniBox} from '.././styles/index';
import DataChart from './DataChart';
import BarChart from './BarChart';

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
                <Row style={{ marginTop: '3%' }}>
                {isLoading && <div> Loading ... </div> }
                {!isLoading && data.Global !== undefined && 
                    <Box>
                        <Col span={8}><ReportCard title="New Cases" bordered={false}  bgcolor={['#9DB4CC']} >
                            <p>{data.Global.NewConfirmed}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="Total confirmed" bordered={false} bgcolor={['#C6AFA3']} >
                            <p>{data.Global.TotalConfirmed}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="New Deaths" bordered={false} bgcolor={['#d3adba']} >
                            <p>{data.Global.NewDeaths}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="Total Deaths" bordered={false} bgcolor={['#B78798']}>
                            <p>{data.Global.TotalDeaths}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="New Recovered" bordered={false} bgcolor={['#cce0d6']}>
                            <p>{data.Global.NewRecovered}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="Total Recovered" bordered={false} bgcolor={['#A2C4B4']}>
                            <p>{data.Global.TotalRecovered}</p></ReportCard>
                        </Col>
                    </Box>
                }
                </Row>
                {/* <Row gutter={[16, 8]}  style={{ marginTop: '3%' }}>
                {!isLoading && data.Global !== undefined && 
                    <Box>
                        <Col span={8}><ReportCard title="Total Deaths" bordered={false} bgcolor={['#B78798']}>
                            <p>{data.Global.TotalDeaths}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="New Recovered" bordered={false} bgcolor={['#cce0d6']}>
                            <p>{data.Global.NewRecovered}</p></ReportCard>
                        </Col>
                        <Col span={8}><ReportCard title="Total Recovered" bordered={false} bgcolor={['#A2C4B4']}>
                            <p>{data.Global.TotalRecovered}</p></ReportCard>
                        </Col>
                    </Box>
                }
                </Row> */}
                <DataChart data={data.Countries}/>

                <Row>
                    <Box>
                        <Col span={12}>
                            <MiniBox />
                        </Col>
                        <Col span={12}>
                            <MiniBox style={{ backgroundColor: 'red' }}/>
                        </Col>
                        <Col span={12}>
                            <MiniBox style={{ backgroundColor: 'yellow' }}/>
                        </Col>
                        <Col span={12}>
                            <MiniBox style={{ backgroundColor: 'green' }}/>
                        </Col>
                    </Box>
                </Row>    

                <BarChart data={data.Countries} />
            </ContentContainer>    
                   
        </>
    )
}

export default WorldWide