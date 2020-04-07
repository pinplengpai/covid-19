import React from 'react';
import styled , { css } from 'styled-components';
import { Layout } from 'antd';

const HeaderContainer = styled(Layout.Header)`
    background-color: #e5e5e5;
    justify-content: space-between;
    li{
        list-style: none;
        display: inline;
        :hover{
            cursor: pointer};
    }
    display: flex;
    justify-content: center;
    
`

function Header() {
    return (
        <HeaderContainer>
            <ul>
                <li> <span role="img">🇹🇭</span> Thailand</li> | 
                <li> <span role="img">🌍</span> Worldwide</li>
            </ul>
        </HeaderContainer>
    )
}

export default Header