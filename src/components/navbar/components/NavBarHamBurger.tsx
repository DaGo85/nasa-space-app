import { NavBarBurger } from "../../../../ts/interfaces/global_interfaces";

function NavBarHamBurger({ isOpen, setIsOpen }: NavBarBurger) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-primaryLightOn dark:bg-primaryDarkOn transition ease transform duration-300`;
  return (
    <button
      className="md:hidden flex flex-col h-12 w-12 border-2 border-primaryLightOn dark:border-primaryDarkOn rounded justify-center items-center group"
      onClick={() => setIsOpen!(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

export default NavBarHamBurger;
