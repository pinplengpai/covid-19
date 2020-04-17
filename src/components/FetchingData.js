import { useEffect } from "react";
import axios from 'axios';


  async function FetchingData(url) {
    const response = await axios.get(url);
    setData(response.data);
  }

  useEffect(() => {
    FetchingData();
  }, []);
    

export default FetchingData;