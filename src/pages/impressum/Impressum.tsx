import GenericCard from "../../components/GenericCard";
import { useTranslation } from "react-i18next";

function Impressum() {
  const { t } = useTranslation("impressum");
  return (
    <>
      <GenericCard added="mt-40" height="h-[500px]">
        <h4>{t("h1-impressum")}</h4>
        <span className="flex flex-col gap-2 w-full px-6">
          <h5>Gemäß zu § 5 TMG:</h5>
          <hr className="border-secondaryLightContainerOn" />
          <address>
            D. Goergens
            <br />
            Dorstener Strasse 534
            <br />
            46119 Oberhausen
          </address>
        </span>
        <span className="flex flex-col gap-2 w-full px-6">
          <h5>Kontakt:</h5>
          <hr className="border-secondaryLightContainerOn" />
          <address>
            E-Mail: dgoergens@gmail.com <br />
          </address>
          <hr className="border-secondaryLightContainerOn" />
        </span>
      </GenericCard>
    </>
  );
}
export default Impressum;
