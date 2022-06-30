import { Link } from "react-router-dom";
import { NavBarLinkItems } from "../../../assets/data";

function NavBarLinks({ toggleNav }: any) {
  return (
    <li className="hidden md:block px-4 items-center justify-between">
      {NavBarLinkItems.map((item) => {
        return (
          <Link
            className="text-xl mx-2 font-bold hover:text-primaryLightOn dark:hover:text-primaryDarkOn underline"
            aria-label={item.label}
            onClick={() => {
              if (toggleNav) {
                toggleNav!();
              }
            }}
            key={item.name}
            to={item.link}
          >
            {item.name}
          </Link>
        );
      })}
    </li>
  );
}
export default NavBarLinks;
