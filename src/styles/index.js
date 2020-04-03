import React from 'react';
import styled, { css } from 'styled-components';
import Card from 'antd/lib/card';


export const TextCardTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
    margin: 0 auto;
`

export const TryCard = styled(Card)`
    border-radius : 20px;
    padding: 10px;
`
export const Body = styled.div`
      min-height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      background-color: red;
`