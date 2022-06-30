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
      <nav className="z-30 w-full fixed flex flex-col items-center justify-center bg-lightVariantSurface/75 dark:bg-darkVariantSurface px-2">
        <span className="flex flex-row items-center justify-center w-full">
          <NavBarLogo />
          <NavBarSocialIcons />
          <ul className="flex flex-col items-center justify-between md:flex-row w-1/3 md:w-2/3 ">
            <NavBarLinks />
            <li>
              <ThemeToggle />
            </li>
            <li className="w-1/3 h-12 m-3"></li>
            <li>
              <NavBarLangDropDown />
            </li>
          </ul>
          <NavBarHamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
        </span>
        <ul
          className={`mt-2 overflow-hidden ease-in-out flex flex-col gap-6 items-center transition-all duration-500   	   
				${isOpen ? "h-80" : "h-0"}`}
        >
          <NavBarLinks toggleNav={toggleNav} />
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
