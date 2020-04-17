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
    position: relative;
`

export const ReportCard = styled(Card)`
    background-color: ${props=> props.bgcolor};
    border-radius: 8px;
    box-shadow: 10px 10px 5px rgb(0,0,0,0.2);
    padding: 10px;
    position: relative;
    :hover {
        margin: 1%;

    }
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

export const Section = styled.div`
    background-color: ${props => props.bgcolor};
    border-radius: 5px;
    position: relative;
`


export const Element = styled.div`
    background-image: url(${props=> props.url}) ;
    position: absolute;
    z-index: ${props=> props.zindex};
    background-size: cover;
    width: ${props=> props.width};
    height: ${props=> props.height}; 
    background-repeat: no-repeat; 
    bottom: ${props=> props.bottom};
    top: ${props=> props.top};
    left: ${props=> props.left};
    right: ${props=> props.right};
   
`