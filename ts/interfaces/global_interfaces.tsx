import React from "react";

export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface Props {
  children: React.ReactNode;
}
