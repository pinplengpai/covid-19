import React, { useState, useEffect }from 'react';
import Header from './Header';
import MapData from './MapData';
import axios from 'axios';


function WorldWide() {
        const [data, setData] = useState([]);
      
        async function GlobalData() {
          const url = 'https://api.covid19api.com/summary'
          const response = await axios.get(url);
          setData(Object.entries(response.data))
        }
      
        useEffect(() => {
          GlobalData();
        }, []);
          
    return(
        <>
            <Header />
            <div> 
                WorldWide
                <p>{JSON.stringify(data[0])}</p>
                {/* <p>{data[0].NewConfirmed}</p> */}
            </div>
            <MapData />
        </>
    )
}

export default WorldWide