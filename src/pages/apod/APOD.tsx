import axios from "axios";
import { useEffect, useState } from "react";
import Accordion from "../../components/Accordion";
import GenericCard from "../../components/GenericCard";

function APOD() {
  const [aPod, setApod] = useState<any>(null);

  useEffect(() => {
    const getApod = async () => {
      const res: any = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}&count=5`
      );
      setApod(res.data);
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
          <div>
            {aPod.map((item: any, index: any) => (
              <Accordion item={item} index={index} />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </GenericCard>
    </>
  );
}
export default APOD;
