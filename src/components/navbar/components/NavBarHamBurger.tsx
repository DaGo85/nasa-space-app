import { NavBarBurger } from "../../../../ts/interfaces/global_interfaces";

function NavBarHamBurger({ isOpen, setIsOpen }: NavBarBurger) {
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-lightVariantSurfaceOn dark:bg-primaryDarkOn transition ease transform duration-300`;
  return (
    <button
      className="md:hidden flex flex-col h-16 border-2 border-lightVariantSurfaceOn dark:border-primaryDarkOn rounded justify-center items-center group px-4"
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
