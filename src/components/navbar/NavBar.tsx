import { useState } from "react";
import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarHamBurger from "./components/NavBarHamBurger";
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
      <nav className="z-30 w-full pb-2 pt-4 fixed flex flex-col items-center justify-between bg-red-400/75">
        <span className=" flex flex-row justify-between items-center w-full px-2">
          <NavBarLogo />
          <NavBarSocialIcons />
          <span className="flex md:flex-row-reverse px-4">
            <ul className="hidden md:flex md:flex-row gap-8 items-center">
              <NavBarLinks />
              <ThemeToggle />
            </ul>
          </span>

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
