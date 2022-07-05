import { useState } from "react";
import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarHamBurger from "./components/NavBarHamBurger";
import NavBarLangDropDown from "./components/NavBarLangDropDown";
import NavBarLinks from "./components/NavBarLinks";
import NavBarLogo from "./components/NavBarLogo";
import NavBarSocialIcons from "./components/NavBarSocialIcons";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="z-30 w-full fixed grid grid-row-8 justify-center items-center bg-lightVariantSurface/75 dark:bg-darkVariantSurface/75">
        <span className=" gap-1 grid row-span-4 grid-cols-12 w-full justify-center items-center py-2">
          <NavBarLogo />
          <NavBarSocialIcons />
          <ul className="grid grid-rows-9 col-span-4 items-center justify-center md:col-span-7 md:grid-cols-7 md:grid-rows-1">
            <li className="hidden md:flex md:col-span-4 px-4 items-center justify-between">
              <NavBarLinks />
            </li>
            <li className="row-span-3 flex justify-center md:col-span-1">
              <ThemeToggle />
            </li>
            <li className="h-12 m-3 row-span-3 md:hidden"></li>
            <li className="row-span-3 md:col-span-1">
              <NavBarLangDropDown />
            </li>
          </ul>
          <div className="col-span-4 flex justify-center">
            <NavBarHamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </span>
        <ul
          className={`mt-2 overflow-hidden ease-in-out row-span-4 flex flex-col w-full
           gap-6 items-center transition-all duration-500   	   
				${isOpen ? "h-80" : "h-0"}`}
        >
          <NavBarLinks toggleNav={toggleNav} />
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
