import BackGround from "../../components/BackGround";
import GenericCard from "../../components/GenericCard";
import { useTranslation } from "react-i18next";

function Impressum() {
  const { t, i18n } = useTranslation("impressum");
  return (
    <BackGround>
      <div className="h-96 w-full">
        <GenericCard>
          <h4>{t("h1-impressum")}</h4>
          <span className="flex flex-col gap-4 w-full px-6">
            <h5>Gemäß zu § 5 TMG:</h5>
            <hr />
            <address>
              D. Goergens
              <br />
              Dorstener Strasse 534
              <br />
              46119 Oberhausen
            </address>
          </span>
          <span className="flex flex-col gap-4 w-full px-6">
            <h5>Kontakt:</h5>
            <hr />
            <address>
              E-Mail: dgoergens@gmail.com <br />
            </address>
            <hr />
          </span>
        </GenericCard>
      </div>
    </BackGround>
  );
}
export default Impressum;
