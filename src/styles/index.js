import styled from 'styled-components';
import { Card, Layout } from 'antd';


export const Body = styled.div`
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
`

export const ContentContainer = styled(Layout.Content)`
    margin: 0 3% 3% 3%;
`

export const ReportCard = styled(Card)`
    width: 300px;
    background-color: ${props=> props.bgcolor};
    border-radius: 10px;
    padding: 10px;
        .site-card-border-less-wrapper {
            background: black;
            padding: 30px;
        }
        .ant-card-head-title{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        .ant-card-body p {
            text-align: center;
        }
`

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

`