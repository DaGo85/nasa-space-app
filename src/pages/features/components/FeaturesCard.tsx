import { Link } from "react-router-dom";
import { featurescontent } from "../../../assets/data";

function FeaturesCard() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:px-4 mt-6 dark:shadow-darkOutline shadow-lightOutline shadow-2xl">
      {featurescontent.map((card) => {
        return (
          <Link
            to={card.url}
            key={card.id}
            className="flex flex-col min-w-[320px] 
            items-center px-4 md:px-12 rounded-xl shadow-lg bg-secondaryLight dark:bg-secondaryDark text-center gap-6 py-6 transition-all hover:scale-105 duration-500"
          >
            <h4 className="">{card.title}</h4>
            <p className="">{card.text}</p>
            <svg
              className="w-52 mx-4 mb-1 fill-backgroundLightOn dark:fill-backgroundDarkOn bg-backgroundLight dark:bg-backgroundDark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={card.view}
              fill="currentColor"
            >
              <path d={card.path}></path>
            </svg>
          </Link>
        );
      })}
    </div>
  );
}
export default FeaturesCard;
