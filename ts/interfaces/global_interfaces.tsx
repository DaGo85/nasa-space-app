import React, { ReactNode } from "react";

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

export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}

export interface ThemeToggleI {
  theme: any | undefined;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
}

export interface ThemeProviderI {
  theme: any | undefined;
  setTheme: React.Dispatch<React.SetStateAction<any>>;
}

export interface CustomLinkI {
  to: string;
  children: string;
  className: string;
  "aria-label": string;
  onClick: () => void;
  key: string;
}

export interface GenericCardI {
  children: JSX.Element | JSX.Element[];
  added: string;
}

export interface NavBarLinksI {
  toggleNav: (() => void) | undefined;
}

//export interface ThemeProviderI {
//setTheme: Dispatch<an<;
//children: ReactNode | Element;
//}
