import { Link } from "react-router-dom";
import { NavBarLinkItems } from "../../../assets/data";

function NavBarLinks({ toggleNav }: any) {
  return (
    <>
      {NavBarLinkItems.map((item) => {
        return (
          <Link
            className="text-xl font-bold hover:text-primaryLightOn dark:hover:text-primaryDarkOn underline"
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
    </>
  );
}
export default NavBarLinks;
