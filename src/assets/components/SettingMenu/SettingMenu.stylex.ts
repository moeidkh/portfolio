import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";
import { dynamicHeight } from "../../../Stylex/dynamicHeight.stylex";

export const styles = stylex.create({
  settingMenuContainer: {
    width: "100%",
    position: "absolute",
    left: 0,
    direction: "rtl",
    zIndex: 6,
    backgroundColor: `rgba(${variables["rgb-slate-700"]}, 0.6)`,
    height: "100vh",
    backdropFilter: "blur(4px)",
    ...dynamicHeight,
  },
  closeIcon: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    cursor: "pointer",
    padding: "0.5rem 0.5rem 0.25rem",
    borderRadius: "0.25rem",
    ":hover": {
      color: variables["black-90"],
      backgroundColor: variables["gray-300"],
    },
    transition: "all 0.25s linear",
  },
  menuContainer: {
    width: "35%",
    height: "100%",
    backgroundColor: variables["gray-900"],
    direction: "ltr",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    justifyContent: "center",
    padding: "6rem",
  },
  menuTitle: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  },
  menuItem: {
    padding: "0.25rem",
    borderRadius: "50%",
    borderWidth: "2px",
    borderColor: "transparent",
    ":hover": {
      borderColor: variables["gray-300"],
    },
    transition: "all 75ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  menu: {
    display: "flex",
    gap: "1rem",
  },
  activeMenuItem: {
    borderColor: variables["dynamicColor"],
    ":hover": {
      borderColor: variables["dynamicColor"],
    },
  },
  colorSection: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    cursor: "pointer",
  },
  green: {
    backgroundColor: variables.green,
  },
  blue: {
    backgroundColor: variables.blue,
  },
  gray: {
    backgroundColor: variables.gray,
  },
  red: {
    backgroundColor: variables.red,
  },
  yellow: {
    backgroundColor: variables.yellow,
  },
  cyan: {
    backgroundColor: variables.cyan,
  },
  purple: {
    backgroundColor: variables.purple,
  },
  orange: {
    backgroundColor: variables.orange,
  },
  backgroundOptionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  backgroundOptionTitle: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  backgroundOptionsContainer: {
    display: "flex",
    gap: "2rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    width: "100%",
  },
  backgroundOption: {
    cursor: "pointer",
    ":hover": {
      backgroundColor: variables["gray-300"],
      color: variables["gray-900"],
    },
    transition: "all 0.1s linear",
    border: `1px solid ${variables["gray-600"]}`,
    padding: "0.5rem",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
});
