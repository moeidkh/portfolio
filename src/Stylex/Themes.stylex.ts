import * as stylex from "@stylexjs/stylex";
import { variables } from "./CssVariables.stylex";

const greenTheme = stylex.createTheme(variables, {
  dynamicColor: "#22c55e",
});

const blueTheme = stylex.createTheme(variables, {
  dynamicColor: "#3b82f6",
});

const grayTheme = stylex.createTheme(variables, {
  dynamicColor: "#a1a1aa",
});

const redTheme = stylex.createTheme(variables, {
  dynamicColor: "#ef4444",
});

const yellowTheme = stylex.createTheme(variables, {
  dynamicColor: "#eab308",
});

const cyanTheme = stylex.createTheme(variables, {
  dynamicColor: "#06b6d4",
});

const purpleTheme = stylex.createTheme(variables, {
  dynamicColor: "#d946ef",
});

const orangeTheme = stylex.createTheme(variables, {
  dynamicColor: "#f97316",
});

export enum Themes {
  greenTheme = "greenTheme",
  blueTheme = "blueTheme",
  grayTheme = "grayTheme",
  redTheme = "redTheme",
  yellowTheme = "yellowTheme",
  cyanTheme = "cyanTheme",
  purpleTheme = "purpleTheme",
  orangeTheme = "orangeTheme",
}

export const ThemesMap: Record<Themes, stylex.Theme<typeof variables>> = {
  [Themes.blueTheme]: blueTheme,
  [Themes.cyanTheme]: cyanTheme,
  [Themes.grayTheme]: grayTheme,
  [Themes.greenTheme]: greenTheme,
  [Themes.purpleTheme]: purpleTheme,
  [Themes.redTheme]: redTheme,
  [Themes.yellowTheme]: yellowTheme,
  [Themes.orangeTheme]: orangeTheme,
} as const;
