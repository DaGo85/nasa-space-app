import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { featureContent } from "../../../assets/data";

function FeaturesCard() {
  const { t } = useTranslation("featurescard");
  return (
    <div className="flex flex-col md:flex-row gap-4 md:px-4 mt-6 dark:shadow-darkOutline shadow-lightOutline shadow-2xl">
      {/* @ts-ignore */}
      {t("features-card", { returnObjects: true }).map((text, index) => {
        return (
          <Link
            to={featureContent[index].url}
            key={featureContent[index].id}
            className="flex flex-col min-w-[320px] 
            items-center px-4 md:px-12 rounded-xl shadow-lg bg-primaryLightContainer text-primaryLightContainerOn 
            dark:bg-secondaryDarkContainer dark:text-secondaryDarkContainerOn border-primaryLightContainerOn
         dark:border-secondaryDarkContainerOn text-center gap-6 py-6 transition-all hover:scale-105 duration-500 border-2"
          >
            <h4 className="">{t(text["featurescard-title"])}</h4>
            <p className="">{t(text["featurescard-subtitle"])}</p>
            <img
              className=""
              src={featureContent[index].icon}
              alt={featureContent[index].title}
            />
          </Link>
        );
      })}
    </div>
  );
}
export default FeaturesCard;
