import axios from "axios";
import { useEffect, useState } from "react";

function APOD() {
  const [aPod, setApod] = useState([]);

  const API_KEY = process.env.REACT_APP_APOD_API_KEY;

  useEffect(() => {
    const getApod = async () => {
      const res: any = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`
      );
      setApod(res);
    };
    getApod();
    console.log(JSON.stringify(aPod));
  }, []);

  console.log(JSON.stringify(aPod));

  return <div>APOD</div>;
}
export default APOD;
