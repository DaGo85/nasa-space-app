import React from "react";

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

export interface ThemeProvider2I extends ThemeProviderI {
  getInitialTheme: (() => void) | undefined;
}
