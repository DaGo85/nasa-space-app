import { Link } from "react-router-dom";
import { NavBarLinkItems } from "../../../assets/data";
import { NavBarLinksI } from "../../../../ts/interfaces/global_interfaces";

function NavBarLinks({ toggleNav }: NavBarLinksI) {
  return (
    <>
      {NavBarLinkItems.map((item) => {
        return (
          <Link
            aria-label={item.label}
            onClick={() => {
              if (toggleNav) {
                toggleNav!();
              }
            }}
            className="auth-link-setup"
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
