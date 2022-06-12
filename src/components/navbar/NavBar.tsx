import { useState } from "react";
import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarHamBurger from "./components/NavBarHamBurger";
import NavBarLinks from "./components/NavBarLinks";
import NavBarLogo from "./components/NavBarLogo";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex flex-row items-center justify-between p-4 bg-slate-300 h-12">
      <NavBarLogo />
      <NavBarLinks />
      <ThemeToggle />
      <NavBarHamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
export default NavBar;
