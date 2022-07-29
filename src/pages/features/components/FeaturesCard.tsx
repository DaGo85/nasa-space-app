import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { featureContent } from "../../../assets/data";

function FeaturesCard() {
  const { t } = useTranslation("featurescard");
  return (
    <div className="flex flex-col 2xl:flex-row gap-12 md:px-4 mt-6">
      {/* @ts-ignore */}
      {t("features-card", { returnObjects: true }).map((text, index) => {
        return (
          <Link
            to={featureContent[index].url}
            key={featureContent[index].id}
            className="flex flex-col min-w-[300px] max-w-[600px] mx-4
            items-center px-4 md:px-12 mb-16 rounded-xl shadow-lg bg-primaryLightContainer text-primaryLightContainerOn 
            dark:bg-secondaryDarkContainer dark:text-secondaryDarkContainerOn border-primaryLightContainerOn
          dark:border-secondaryDarkContainerOn text-center gap-4 py-4  hover:scale-105 duration-500 border-2"
          >
            <h4 className="font-2xl font-bold underline">
              {t(text["featurescard-title"])}
            </h4>
            <p className="text-sm bg-tertiaryLightContainer dark:bg-secondaryDarkOn rounded px-2">
              {t(text["featurescard-subtitle"])}
            </p>
            <img
              className="max-h-[800px] min-h-[200px] pb-8"
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
