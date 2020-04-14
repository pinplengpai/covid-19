import React, { useState,useEffect } from "react";
import Header from './Header';
import ThaiTimeSeries from './ThaiTimeSeries';
import CaseStat from './CaseStat';
import PieChart from './PieChart';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Col } from 'antd'
import { ReportCard, ContentContainer} from '.././styles/index';

const Box = styled.div`
  // display: flex;
  // justify-content: space-around;
  width: 100%;
`

function ThaiData(){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function ConstantDataThai() {
    setIsLoading(true)
    const url = 'https://covid19-cdn.workpointnews.com/api/constants.json?'
    const response = await axios.get(url);
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    ConstantDataThai();
  }, []);
    
  return (
    <>
      <Header />
        <ContentContainer>
          <Row gutter={[16, 16]}  style={{ marginTop: '3%' }}>
              {isLoading && <div> Loading ... </div> }
              {!isLoading && data !== undefined && 
              <Box> 
                <Col xl={6} sm={12}>
                  <ReportCard title="Total Cases" bordered={false} bgcolor={['#c6afa3']}>
                    <p>{data["ผู้ติดเชื้อ"]}</p>
                  </ReportCard>
                </Col>
                <Col xl={6} sm={12}>
                  <ReportCard title="Recovered" bordered={false} bgcolor={['#a2c4b4']}>
                    <p>{data["หายแล้ว"]}</p>
                  </ReportCard>
                </Col>
                <Col xl={6} sm={12}>
                  <ReportCard title="Deaths" bordered={false} bgcolor={['#b78798']}>
                    <p>{data["เสียชีวิต"]}</p>
                  </ReportCard>
                </Col>
                <Col xl={6} sm={12}>
                  <ReportCard title="Today" bordered={false} bgcolor={['#9db4cc']}>
                    <p>{data["โน๊ตผู้ติดเชื้อ"]}</p>
                  </ReportCard>
                </Col>
              </Box>
              }
          </Row>
          <ThaiTimeSeries />
          <CaseStat />
          <PieChart />
        </ContentContainer>
    </>
  )
}

export default ThaiData;