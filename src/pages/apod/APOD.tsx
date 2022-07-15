import axios from "axios";
import { useEffect, useState } from "react";
import Accordion from "../../components/Accordion";
import InfoModal from "../../components/InfoModal";
import SkeletonAccordionApod from "../../components/skeletons/SkeletonAccordionApod";
import SkeletonCard from "../../components/skeletons/SkeletonCardApod";
import { useInfoContext } from "../../utility/InfoContext";

function APOD() {
  const [aPod, setApod] = useState<any>(null);
  const [getNew, setGetNew] = useState<any>(false);

  const { setShowModal } = useInfoContext();

  useEffect(() => {
    const getApod = async () => {
      const res: any = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_API_KEY}&count=5`
      );
      setApod(res.data);
    };

    getApod();
  }, [getNew]);

  return (
    <>
      <h1 className="py-30">APOD</h1>
      <h2>Astronomic Picture of the day</h2>
      <button className="btn-87" onClick={() => setGetNew(!getNew)}>
        <span>New</span>
        <svg aria-hidden>
          <circle></circle>
        </svg>
      </button>
      <button className="btn-87" onClick={() => setShowModal(true)}>
        <span>Info</span>
        <svg aria-hidden>
          <circle></circle>
        </svg>
      </button>
      <InfoModal />

      {aPod ? (
        <div className="flex flex-col gap-8 w-11/12">
          {aPod.map((item: any, index: any) => (
            <Accordion key={index + Date.now()} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 w-11/12">
          <SkeletonCard />
          <SkeletonAccordionApod />
          <SkeletonAccordionApod />
          <SkeletonAccordionApod />
          <SkeletonAccordionApod />
        </div>
      )}
    </>
  );
}
export default APOD;
