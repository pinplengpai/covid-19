import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Text } from '../styles/index';
import { Row, Col } from 'antd';
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

function BarChartStat() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function CaseStatFetching() {
    setIsLoading(true)
    const url = 'https://covid19-cdn.workpointnews.com/api/v2/cases.json'
    const response = await axios.get(url);
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    CaseStatFetching();
  }, []);
  //gender chart
  let maleCount = 0
  let femaleCount = 0
  let nullCount = 0

    data && data.records && data.records.map(item => {
      if (item.gender === "ชาย") {
        maleCount++
      } else if (item.gender === "หญิง") {
        femaleCount++
      } else if (item.gender === null) {
        nullCount++
      } 
    })   

  const genderCount = [{ "male": maleCount, "female": femaleCount, "nonbinary": nullCount }];
  // Age Chart
  const age1 = data && data.records && data.records.filter(item => item.age >= 0 && item.age <= 10)
  const age2 = data && data.records && data.records.filter(item => item.age >= 11 && item.age <= 20)
  const age3 = data && data.records && data.records.filter(item => item.age >= 21 && item.age <= 30)
  const age4 = data && data.records && data.records.filter(item => item.age >= 31 && item.age <= 40)
  const age5 = data && data.records && data.records.filter(item => item.age >= 41 && item.age <= 50)
  const age6 = data && data.records && data.records.filter(item => item.age >= 51 && item.age <= 60)
  const age7 = data && data.records && data.records.filter(item => item.age >= 61 && item.age <= 70)
  const age8 = data && data.records && data.records.filter(item => item.age >= 71 && item.age <= 80)
  const age9 = data && data.records && data.records.filter(item => item.age >= 81 && item.age <= 120)
  const ageGroup = [
    { "name": "0-10", "age": age1 && age1.length },
    { "name": "11-20", "age": age2 && age2.length },
    { "name": "21-30", "age": age3 && age3.length },
    { "name": "31-40", "age": age4 && age4.length },
    { "name": "41-50", "age": age5 && age5.length },
    { "name": "51-60", "age": age6 && age6.length },
    { "name": "61-70", "age": age7 && age7.length },
    { "name": "71-80", "age": age8 && age8.length },
    { "name": "80-120", "age": age9 && age9.length }];


  return (
    <>
      <Row gutter={[16, 16]} style={{ marginTop: '3%' }} >
        <Col xl={12} sm={24}>
          <Text><h3 style={{ marginLeft: '8%', marginBottom: '7%' }}>Age</h3></Text>
          {isLoading && <div> Loading ... </div>}
          {!isLoading && ageGroup &&
            <BarChart
              width={600}
              height={300}
              data={ageGroup}
              margin={{
                top: 10, right: 30, left: 20, bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="age" fill="#EF6830" background={{ fill: '#F6B259' }} />
            </BarChart>
          }
        </Col>
        <Col xl={12} sm={24}>
          <Text><h3>Gender</h3></Text>
          {isLoading && <div> Loading ... </div>}
          {!isLoading && genderCount &&
            <BarChart width={500} height={350} data={genderCount}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="gender" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="male" fill="#EF6330" />
              <Bar dataKey="female" fill="#F18A6A" />
              <Bar dataKey="nonbinary" fill="#F1AB88" />
            </BarChart>
          }
        </Col>

      </Row>
    </>
  )
}
export default BarChartStat