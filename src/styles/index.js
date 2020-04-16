import styled from 'styled-components';
import { Card, Layout } from 'antd';


export const Body = styled.div`
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;    
`
export const Text = styled.div`
    font-weight: bold;
    font-size: 20px;
`

export const ContentContainer = styled(Layout.Content)`
    margin: 0 3% 3% 3%;
`

export const ReportCard = styled(Card)`
    background-color: ${props=> props.bgcolor};
    border-radius: 8px;
    box-shadow: 10px 10px 5px rgb(0,0,0,0.2);
    padding: 10px;
        .ant-card-head-title{
            font-family: 'Inconsolata', monospace;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        .ant-card-body 
            padding: 10px !important;
            p {
                text-align: center;
                font-size: 3rem;
                margin: 0;
            }
`

export const Box = styled.div`
    box-shadow: 20px 20px 10px rgb(0,0,0,0.2);
`

export const MiniBox = styled(Card)`
  background-color: blue;
  height: 100px;
`