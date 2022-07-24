import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { featurescontent } from "../../../assets/data";

function FeaturesCard() {
  const { t } = useTranslation("featurescard");
  return (
    <div className="flex flex-col md:flex-row gap-4 md:px-4 mt-6 dark:shadow-darkOutline shadow-lightOutline shadow-2xl">
      {t("featurescard", { joinArrays: "+" })
        .split("+")
        .map((text, index) => {
          return (
            <Link
              to={featurescontent[index].url}
              key={featurescontent[index].id}
              className="flex flex-col min-w-[320px] 
            items-center px-4 md:px-12 rounded-xl shadow-lg bg-secondaryLight dark:bg-secondaryDark text-center gap-6 py-6 transition-all hover:scale-105 duration-500"
            >
              <h4 className="">{"features-card"}</h4>
              <p className="">{"features-card"}</p>
              <svg
                className="w-52 mx-4 mb-1 fill-backgroundLightOn dark:fill-backgroundDarkOn bg-backgroundLight dark:bg-backgroundDark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={featurescontent[index].view}
                fill="currentColor"
              >
                <path d={featurescontent[index].path}></path>
              </svg>
            </Link>
          );
        })}
    </div>
  );
}
export default FeaturesCard;
