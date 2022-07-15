import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion";
import InfoModal from "../../components/InfoModal";
import SkeletonAccordionApod from "../../components/skeletons/SkeletonAccordionApod";
import SkeletonCard from "../../components/skeletons/SkeletonCardApod";

function APOD() {
  const [aPod, setApod] = useState<any>(null);
  const [getNew, setGetNew] = useState<any>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { t } = useTranslation("apod");

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
      <h1 className="py-30">{t("apod-test")}</h1>
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
      <InfoModal
        showModal={showModal}
        setShowModal={setShowModal}
        text={t("modal")}
      />
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
