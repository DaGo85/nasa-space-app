import { useTranslation } from "react-i18next";
import IntroCard from "./components/IntroCard";

function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <IntroCard
        number={t("card-1-number")}
        text={t("card-1-text")}
        button={t("card-1-button")}
      />
      <IntroCard
        number={t("card-2-number")}
        text={t("card-2-text")}
        button={t("card-2-button")}
      />
      <IntroCard
        number={t("card-3-number")}
        text={t("card-3-text")}
        button={t("card-3-button")}
      />
    </>
  );
}
export default Home;
