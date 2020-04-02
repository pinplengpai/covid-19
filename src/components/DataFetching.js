import React, {useState, useEffect} from 'react'; 
import axios from 'axios';

function DataFetching(){


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://covid19-cdn.workpointnews.com/api/trend.json')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
  })
  return (
    <div>
      <ul>
        {posts.map(post => <li>{post.deaths}</li>
        )}
      </ul>

    </div>
  )
}

export default DataFetching


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