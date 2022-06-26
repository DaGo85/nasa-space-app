export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}

export interface NavBarLinksI {
  toggleNav: (() => void) | undefined;
}
