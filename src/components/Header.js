import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Layout } from 'antd';

const HeaderContainer = styled(Layout.Header)`
    background-color: #F6B259;
    justify-content: space-between;
    display: flex;
    justify-content: center;
    box-shadow: 2px 0 rgb(183, 183, 183) ;
    li{
        list-style: none;
        display: inline;
        :hover{
            cursor: pointer};
    }
    a{
        text-decoration: none;
        color: black;
        font-family: 'Inconsolata', monospace;
        font-size: 16px;
    }

`
function Header() {
    return (
        <HeaderContainer>
            <ul>
                <li> <span>🇹🇭</span> <Link to="/">Thailand</Link></li> | 
                <li> <span >🌍</span> <Link to="/worldwide"> Worldwide</Link></li>
            </ul>
        </HeaderContainer>
    )
}

export default Header