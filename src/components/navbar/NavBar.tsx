import ThemeToggle from "../../utility/darkmode/ThemeToggle";
import NavBarLinks from "./components/NavBarLinks";
import NavBarLogo from "./components/NavBarLogo";

function NavBar() {
  return (
    <nav>
      <NavBarLogo />
      <NavBarLinks />
      <ThemeToggle />
    </nav>
  );
}
export default NavBar;
