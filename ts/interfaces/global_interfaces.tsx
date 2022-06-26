export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}

export interface NavBarLinksI {
  toggleNav: (() => void) | undefined;
}

export interface SocialIconsI {
  name: string;
  viewBox: string;
  svg: string;
  link: string;
}
[];
