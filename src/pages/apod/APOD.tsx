import axios from "axios";
import { useEffect, useState } from "react";
import GenericCard from "../../components/GenericCard";

function APOD() {
  const [aPod, setApod] = useState<any>(null);

  const API_KEY = process.env.REACT_APP_APOD_API_KEY;

  const getApod = async () => {
    const res: any = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`
    );
    setApod(res);
  };

  useEffect(() => {
    getApod();
  }, []);

  console.log(JSON.stringify(aPod));

  return (
    <>
      <h1>APOD</h1>
      <h2>Astronomic Picture of the day</h2>
      <GenericCard added="mt-40">
        {aPod ? (
          <span>
            <h3>{aPod.data[0].title}</h3>
            <h4>Author: {aPod.data[0].copyright}</h4>
            <h4>Date: {aPod.data[0].date}</h4>
            <img src={aPod.data[0].url} alt="Astronomic pictur of the day" />
            <p>{aPod.data[0].explanation}</p>
          </span>
        ) : (
          <div></div>
        )}
      </GenericCard>
    </>
  );
}
export default APOD;
