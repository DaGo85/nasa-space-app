import { useState } from "react";
import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarHamBurger from "./components/NavBarHamBurger";
import NavBarLangDropDown from "./components/NavBarLangDropDown";
import NavBarLinks from "./components/NavBarLinks";
import NavBarLogo from "./components/NavBarLogo";
import NavBarSocialIcons from "./components/NavBarSocialIcons";

function NavBar2() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="z-30 w-full fixed flex justify-center items-center bg-lightVariantSurface/75 dark:bg-darkVariantSurface">
        <span className=" gap-1 mx-1 grid grid-cols-12 w-full justify-center items-center py-2">
          <NavBarLogo />
          <NavBarSocialIcons />
          <ul className="grid grid-rows-9 col-span-4 items-center justify-center md:col-span-7 md:grid-cols-12 ">
            <NavBarLinks />
            <li className="row-span-3 flex justify-center">
              <ThemeToggle />
            </li>
            <li className="h-12 m-3 row-span-3"></li>
            <li className="row-span-3">
              <NavBarLangDropDown />
            </li>
          </ul>
          <div className="col-span-4 flex justify-center">
            <NavBarHamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </span>
        {/*<ul
          className={`mt-2 overflow-hidden ease-in-out flex flex-col gap-6 items-center transition-all duration-500   	   
				${isOpen ? "h-80" : "h-0"}`}
        >
          <NavBarLinks toggleNav={toggleNav} />
  </ul> */}
      </nav>
    </header>
  );
}
export default NavBar2;
