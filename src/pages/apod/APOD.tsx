import axios from "axios";
import { useEffect, useState } from "react";
import GenericCard from "../../components/GenericCard";

function APOD() {
  const [aPod, setApod] = useState<any>(null);

  useEffect(() => {
    const getApod = async () => {
      const res: any = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}&count=1`
      );
      setApod(res.data[0]);
    };

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
            <h3>{aPod.title}</h3>
            <h4>Author: {aPod.copyright}</h4>
            <h4>Date: {aPod.date}</h4>
            <img src={aPod.url} alt="Astronomic pictur of the day" />
            <p>{aPod.explanation}</p>
          </span>
        ) : (
          <div></div>
        )}
      </GenericCard>
    </>
  );
}
export default APOD;
