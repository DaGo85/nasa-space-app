import { socialIconsList } from "../../../assets/data";

function NavBarSocialIcons() {
  return (
    <ul className="flex-row gap-6 hidden md:flex md:col-span-3 px-6">
      {socialIconsList.map((icon) => {
        return (
          <li key={icon.name}>
            <a href={icon.link}>
              <svg
                className="w-8 h-8 hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={icon.viewBox}
              >
                <g
                  className="hover:fill-primaryLightOn dark:hover:fill-primaryDarkOn"
                  fill="#70787c"
                >
                  <path d={icon.svg} />
                </g>
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBarSocialIcons;
