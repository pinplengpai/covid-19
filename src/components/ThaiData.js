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
import * as Bgheadline from  './images/bgheadline.png'
import * as Recovered from './images/recoverd.png'
import * as Today from './images/today.png'
import * as Confirmed from './images/confirmed.png'




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
          <Text style={{ marginTop: '3%'}}><h2 style={{ fontWeight: 'bold' }}>Coronavirus Updated in Thailand</h2></Text>
          <Element url={Bgheadline} left={'-2%'} top={'-26%'} width={'634px'} height={'372px'} zindex={'-1'}/> 
          <Row gutter={[16, 16]}  style={{ marginTop: '3%', marginBottom: '8%'}}>
              <Col xl={6} sm={12}>
                <Element url={Today} bottom={'-5%'} right={'-13%'} width={'173px'} height={'149px'} zindex={'2'}/> 
                <ReportCard title="Today" bordered={false} bgcolor={'#B4C889'}>
                  <p style={{ fontSize: '1.5rem'}} >{data["โน๊ตผู้ติดเชื้อ"]}</p>
                </ReportCard>
              </Col>
              <Col xl={6} sm={12}>
                <ReportCard title="Total Confirmed" bordered={false} bgcolor={'#87A08B'}>
                  <p>{data["ผู้ติดเชื้อ"]}</p>
                </ReportCard>
                <Element url={Confirmed} left={'-8%'} top={'-7%'} width={'158px'} height={'149px'} zindex={'2'}/> 
              </Col>
              <Col xl={6} sm={12}>
                <Element url={Recovered} left={'-8%'} bottom={'-7%'} width={'195px'} height={'201px'} zindex={'2'}/> 
                <ReportCard title="Recovered" bordered={false} bgcolor={'#D2D6A8'}>
                <p>{data["หายแล้ว"]}</p>
                </ReportCard>
              </Col>
              <Col xl={6} sm={12}>
              <Element url={Rip} top={'-6%'} right={'1%'} width={'118px'} height={'116px'} zindex={'2'}/> 
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