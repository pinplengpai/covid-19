import React, { useState,useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import ThaiTimeSeries from './ThaiTimeSeries';
import BarChart from './BarChart';
import Loading from './Loading';
import axios from 'axios';
import { Row, Col} from 'antd'
import { ReportCard, ContentContainer,Text,Element} from '.././styles/index';
import * as Rip from './images/rip.png'




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
          {isLoading && <div><Loading/></div> }
          {!isLoading && data !== undefined && 
           <>
          <Text style={{ marginTop: '3%' }}><h2>Coronavirus Updated in Thailand</h2></Text>
          <Row gutter={[16, 16]}  style={{ marginTop: '3%', marginBottom: '8%'}}>
              <Col xl={6} sm={12}>
                <ReportCard title="Today" bordered={false} bgcolor={'#B4C889'}>
                  <p style={{ fontSize: '1.5rem'}} >{data["โน๊ตผู้ติดเชื้อ"]}</p>
                </ReportCard>
              </Col>
              <Col xl={6} sm={12}>
                <ReportCard title="Total Confirmed" bordered={false} bgcolor={'#87A08B'}>
                  <p>{data["ผู้ติดเชื้อ"]}</p>
                </ReportCard>
              </Col>
              <Col xl={6} sm={12}>
                <ReportCard title="Recovered" bordered={false} bgcolor={'#D2D6A8'}>
                <p>{data["หายแล้ว"]}</p>
                </ReportCard>
              </Col>
              <Col xl={6} sm={12}>
              <Element url={Rip} bottom={'-9%'} left={'-8%'}/> 
                <ReportCard title="Deaths" bordered={false} bgcolor={'#67935e'}>
                <p>{data["เสียชีวิต"]}</p>
                </ReportCard>
              </Col> 
          </Row>
          <BarChart />
          <ThaiTimeSeries />
          </>
          }
        </ContentContainer>
      <Footer />
    </>
  )
}

export default ThaiData;