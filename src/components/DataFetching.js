import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function DataFetching(){
  const [data, setData] = useState([]);

  async function getData() {
    const response = await axios.get(
        'https://covid19-cdn.workpointnews.com/api/trend.json'
      );
    console.log(response);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);
    
  return (
    <div>
      <ul>
        {data.map(data => <li>{data.deaths}</li>
      )}
      </ul>
    </div>
  )
}


// import axious from "axios";

// function FetchData() {
//     const [data, setData] = useState();
//     useEffect(async () => {
//       const result = await axios(
//         'https://covid19-cdn.workpointnews.com/api/trend.json',
//       );
//       setData(result.data);
//     });
//     return (
//       <ul>
//         {data.map(item => (
//           <li>{item.deaths}</li>
//           <li>{item.confimed}</li>
//           <li>{item.recovered}</li>
//         ))}
//       </ul>
//     );
//   }

// console.log(FetchData);