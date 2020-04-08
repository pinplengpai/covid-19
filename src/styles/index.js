import React from 'react';
import styled, { css } from 'styled-components';
import { Card, Layout } from 'antd';


export const Body = styled.div`
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    background-color: red;
`

export const ContentContainer = styled(Layout.Content)`
    margin: 0 3% 3% 3%;
`

export const ReportCard = styled(Card)`
    width: 300px;
    background-color: pink;
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


export const Loading = styled.div`
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #f36 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }

`