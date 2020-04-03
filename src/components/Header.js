import React from 'react';
import styled , { css } from 'styled-components';
import { Layout } from 'antd';

const HeaderContainer = styled(Layout.Header)`
    background-color: #dce9ed;
    justify-content: space-between;
    li{
        list-style: none;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <ul>
                <li>Thailand</li>
                <li>Worldwide</li>
            </ul>
        </HeaderContainer>
    )
}

export default Header