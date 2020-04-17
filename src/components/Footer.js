import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const FooterContainer = styled(Layout.Footer)`
    background-color: #7D8F85;
    box-shadow:inset 0 15px 5px -16px #111;

    ul {
        text-align: center;
        color: white;
        font-weight: bold;
        list-style: none;
        font-size: 20px;
            a{
                text-decoration: none;
                color: white;
                font-family: 'Inconsolata', monospace;
                font-size: 16px;
                font-weight: normal;
            }
        
    }

    .left{
        li{
            color: black;
            // position: absolute;
            // right: 2%;
        }
    }

`
function Header() {
    return (
        <FooterContainer>

                <ul>
                    <li> More information about COVID-19</li>
                    <li><a href="https://www.who.int">World Health Organization</a></li> 
                    <li><a href="https://www.theguardian.com/world/2020/apr/16/coronavirus-world-map-which-countries-have-the-most-cases-and-deaths">Coronavirus Outbreak</a></li>  
                    <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html">Social Distancing</a></li>
                    <li><a href="https://covid19.workpointnews.com">Situation in Thailand</a></li>
                    <li style={{position:"absolute", right:"2%"}}><a href="https://github.com/pinplengpai">Created by: pinplengpai</a></li>
                </ul>
        </FooterContainer>
    )
}

export default Header