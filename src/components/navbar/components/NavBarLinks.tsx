import { NavBarLinksI } from "../../../../ts/interfaces/global_interfaces";
import { NavBarLinkItems } from "../../../assets/data";
import CustomLink from "../../CustomLink";

function NavBarLinks({ toggleNav }: NavBarLinksI) {
  return (
    <>
      {NavBarLinkItems.map((item) => {
        return (
          <CustomLink
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
          </CustomLink>
        );
      })}
    </>
  );
}
export default NavBarLinks;
