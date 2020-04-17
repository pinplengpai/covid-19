import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Layout } from 'antd';

const HeaderContainer = styled(Layout.Header)`
    background-color: #D6E0E4;
    justify-content: space-between;
    display: flex;
    justify-content: center;
    box-shadow:inset 0 15px 5px -16px #111;


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
                <li> <span role="img" aria-label="Icon">🇹🇭</span> <Link to="/">Thailand</Link></li> | 
                <li> <span role="img" aria-label="Icon"  >🌍</span> <Link to="/worldwide"> Worldwide</Link></li> | 
                <li> <span role="img" aria-label="Icon"  >🔛</span> <Link to="/worldwide"> Social Distancing</Link></li>
            </ul>
        </HeaderContainer>
    )
}

export default Header