import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion";
import InfoModal from "../../components/InfoModal";
import SkeletonAccordionApod from "../../components/skeletons/SkeletonAccordionApod";
import SkeletonCard from "../../components/skeletons/SkeletonCardApod";

import { motion } from "framer-motion";

const accordionVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: -10,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

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
      <div className="flex flex-row justify-between items-center w-2/3 border-2 rounded px-20 py-10 bg-tertiaryLightContainer border-tertiaryLightContainerOn dark:bg-primaryDarkContainer dark:border-primaryDarkContainerOn hover:scale-105 ">
        <button
          onClick={() => setGetNew(!getNew)}
          className="inline-flex items-center px-4 py-2 bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60
     dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn
     hover:border-primaryDarkOn dark:hover:border-primaryLightOn text-sm font-medium rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          Neu
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center px-4 py-2 bg-primaryLight dark:bg-primaryDark hover:bg-primaryLight/60
     dark:hover:bg-primaryDark/60 border-primaryLightOn dark:border-primaryDarkOn
     hover:border-primaryDarkOn dark:hover:border-primaryLightOn text-sm font-medium rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mr-2"
            viewBox="0 0 512 512"
            stroke="currentColor"
            fill="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
            />
          </svg>
          Info
        </button>
      </div>
      <InfoModal
        showModal={showModal}
        setShowModal={setShowModal}
        text={t("modal")}
      />
      {aPod ? (
        <div className="flex flex-col gap-8 w-11/12">
          {aPod.map((item: any, index: any) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={accordionVariants}
            >
              <Accordion key={index + Date.now()} item={item} index={index} />
            </motion.div>
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
