export interface NavBarLinksI {
  name: string;
  link: string;
  label: string;
}

export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}
