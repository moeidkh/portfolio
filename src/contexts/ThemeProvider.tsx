// ThemeContext.jsx
import React, { createContext, ReactNode, useContext, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Themes, ThemesMap } from "../Stylex/Themes.stylex";
import { variables } from "../Stylex/CssVariables.stylex";
import { useSelector } from "react-redux";
import store from "../Redux/store";

type ThemeContextType = {
  themeName: Themes;
  theme: stylex.Theme<typeof variables>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const pastTheme = localStorage.getItem("theme") as Themes | undefined;
  const { themeName, theme } = useSelector(({ theme }) => theme) ?? {
    themeName: pastTheme ?? Themes.greenTheme,
    theme: ThemesMap[pastTheme ?? Themes.greenTheme],
  };

  return (
    <ThemeContext.Provider value={{ themeName, theme }}>
      <div {...stylex.props(theme)}>{children}</div>
    </ThemeContext.Provider>
  );
}
