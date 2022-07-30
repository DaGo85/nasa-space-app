import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion";
import InfoModal from "../../components/InfoModal";
import SkeletonAccordionApod from "../../components/skeletons/SkeletonAccordionApod";
import SkeletonCard from "../../components/skeletons/SkeletonCardApod";

import { motion } from "framer-motion";
import ButtonBackgroundCard from "../../components/ButtonBackgroundCard";
import UniverseButton from "../../components/UniverseButton";
import { accordionVariants } from "../../utility/motionVariants";
import MainTitle from "../../components/MainTitle";
import SubTitle from "../../components/SubTitle";

function APOD() {
  const [aPod, setApod] = useState<any>(null);
  const [getNew, setGetNew] = useState<any>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { t } = useTranslation("apod");

  useEffect(() => {
    const getApod = async () => {
      const res: any = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}&count=5`
      );
      setApod(res.data);
    };

    getApod();
  }, [getNew]);

  const handleGetNew = () => {
    setGetNew(!getNew);
  };

  const handleGetInfo = () => {
    setShowModal(true);
  };

  return (
    <>
      <MainTitle title={t("apod-h1")} />
      <SubTitle subTitle={t("apod-h2-subtitle")} />
      <ButtonBackgroundCard>
        <UniverseButton
          icon="New"
          setter={handleGetNew}
          text={t("apod-button-new")}
        />
        <UniverseButton
          icon="Info"
          setter={handleGetInfo}
          text={t("apod-button-info")}
        />
      </ButtonBackgroundCard>
      <InfoModal
        showModal={showModal}
        setShowModal={setShowModal}
        text={t("apod-modal")}
        buttontext={t("apod-modal-button")}
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
              <Accordion key={index + Date.now()} item={item} index={index}>
                <span className="items-center flex flex-col gap-4">
                  <hr className="text-primaryLightContainerOn dark:text-secondaryDarkContainerOn w-full" />
                  {item.copyright ? (
                    <h4>Author: {item.copyright}</h4>
                  ) : (
                    <div></div>
                  )}
                  <h4>Date: {item.date}</h4>
                  <img src={item.url} alt="Astronomic pic of the day" />
                  <p>{item.explanation}</p>
                </span>
              </Accordion>
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
