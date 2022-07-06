// Context for darkmode

import React, { useContext, useEffect, useState, createContext } from "react";
import { ThemeProviderI } from "../../../ts/interfaces/global_interfaces";

// Function for checking prefered mode

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light"; // light theme as the default;
};

// Creates Context
interface ThemeContextI {
  theme: string;
  setTheme: () => void;
}

const ThemeContext = createContext<ThemeContextI | null>(null);

// Context Provider

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>(getInitialTheme);
  const initTheme = getInitialTheme();

  const rawSetTheme = (rawTheme: any) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initTheme) {
    rawSetTheme(initTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    // @ts-ignore
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming Context

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useThemeContext };
