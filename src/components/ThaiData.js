import React, { useState,useEffect } from "react";
import Header from './Header';
import ThaiTimeSeries from './ThaiTimeSeries';
import CaseStat from './CaseStat';
import axios from 'axios';
import { Row, Col} from 'antd'
import { ReportCard, ContentContainer,Text} from '.././styles/index';


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
          <Text style={{ marginTop: '3%' }}><h2>Coronavirus Updated in Thailand</h2></Text>
          <Row gutter={[16, 16]}  style={{ marginTop: '1%' }}>
              {isLoading && <div> Loading ... </div> }
              {!isLoading && data !== undefined && 
              <>
                  <Col xl={6} sm={12}>
                    <ReportCard title="Today" bordered={false} bgcolor={'#F39031'}>
                      <p style={{ fontSize: '1.5rem'}} >{data["โน๊ตผู้ติดเชื้อ"]}</p>
                    </ReportCard>
                  </Col>
                  <Col xl={6} sm={12}>
                    <ReportCard title="Total Confirmed" bordered={false} bgcolor={'#F18A6A'}>
                      <p>{data["ผู้ติดเชื้อ"]}</p>
                    </ReportCard>
                  </Col>
                  <Col xl={6} sm={12}>
                    <ReportCard title="Recovered" bordered={false} bgcolor={'#EF7049'}>
                    <p>{data["หายแล้ว"]}</p>
                    </ReportCard>
                  </Col>
                  <Col xl={6} sm={12}>
                    <ReportCard title="Deaths" bordered={false} bgcolor={'#E0582C'}>
                    <p>{data["เสียชีวิต"]}</p>
                    </ReportCard>
                  </Col>
                </>
              }
          </Row>
          <CaseStat />
          <ThaiTimeSeries />
        </ContentContainer>
    </>
  )
}

export default ThaiData;