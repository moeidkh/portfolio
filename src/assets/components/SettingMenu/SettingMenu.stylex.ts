import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";
import { dynamicHeight } from "../../../Stylex/dynamicHeight.stylex";

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const styles = stylex.create({
  settingMenuContainer: {
    color: variables.white,
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
    width: { default: "35%", [breakpoints.sm]: "100%" },
    height: { default: "100vh", [breakpoints.sm]: "100dvh" },
    backgroundColor: variables["gray-900"],
    direction: "ltr",
    display: "flex",
    flexDirection: "column",
    justifyContent: { default: "center", [breakpoints.sm]: "flex-start" },
    paddingTop: { default: "unset", [breakpoints.sm]: "7rem" },
    alignItems: "center",
    gap: "3rem",
  },
  menuTitle: {
    fontSize: { default: "2.25rem", [breakpoints.sm]: "2.5rem" },
    lineHeight: "2.5rem",
  },
  menuItem: {
    padding: "0.25rem",
    borderRadius: "50%",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "transparent",
    transition: "all 75ms cubic-bezier(0.4, 0, 0.2, 1)",
    ":hover": {
      borderColor: variables["gray-300"],
    },
  },
  menu: {
    width: { default: "100%", [breakpoints.sm]: "80%" },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: { default: "unset", [breakpoints.sm]: "center" },
    gap: "2rem",
  },
  backgroundOptionTitle: {
    fontSize: { default: "1.25rem", [breakpoints.sm]: "1.5rem" },
    lineHeight: "1.75rem",
    paddingLeft: { default: "unset", [breakpoints.sm]: "1rem" },
    paddingTop: { default: "unset", [breakpoints.sm]: "1rem" },
    fontWeight: "600",
  },
  backgroundOptionsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: { default: "unset", [breakpoints.sm]: "center" },
    gap: {default: "2rem", [breakpoints.sm]: "1rem"},
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    width: { default: "100%", [breakpoints.sm]: "80%" },
  },
  backgroundOption: {
    cursor: "pointer",
    ":hover": {
      backgroundColor: variables["gray-300"],
      color: variables["gray-900"],
    },
    transition: "all 0.1s linear",
    border: `1px solid ${variables["gray-600"]}`,
    padding: {default:"0.5rem", [breakpoints.sm]: "0.75rem"},
    color: variables["gray-200"],
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
