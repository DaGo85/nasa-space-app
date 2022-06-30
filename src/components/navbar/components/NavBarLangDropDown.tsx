import { useTranslation } from "react-i18next";

function NavBarLangDropDown() {
  const { t } = useTranslation("navbar");

  // todo replace a with a proper tag

  return (
    <>
      <div className="p-2">
        <div className="group inline-block relative transition-all duration-500">
          <button
            className="bg-secondaryLightContainer text-secondaryLightContainerOn
           hover:text-primaryLightOn dark:hover:text-primaryDarkOn border-2 
           font-semibold py-2 px-0 rounded inline-flex justify-center items-center w-28"
          >
            <span className="mr-1">{t("lang.")}</span>
            <svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="group-hover:block absolute hidden text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn pt-1 transition-all duration-500">
            <li className="">
              <a href="/">
                <button className="rounded-t bg-black/90 hover:bg-white hover:text-black text-white border-white border-2 py-2 px-4 w-28 flex justify-center transition-all duration-500 ">
                  English
                </button>
              </a>
            </li>
            <li className="">
              <a href="/">
                <button className="rounded-b bg-black/90 hover:bg-white hover:text-black text-white border-white border-2 border-t-0 py-2 px-4 w-28 flex justify-center transition-all duration-500 ">
                  Deutsch
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarLangDropDown;
