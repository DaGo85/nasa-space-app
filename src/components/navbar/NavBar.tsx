import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarLinks from "./components/NavBarLinks";
import NavBarLogo from "./components/NavBarLogo";

function NavBar() {
  return (
    <nav className="w-full flex flex-row items-center justify-between p-4 bg-slate-300 h-12">
      <NavBarLogo />
      <NavBarLinks />
      <ThemeToggle />
    </nav>
  );
}
export default NavBar;
