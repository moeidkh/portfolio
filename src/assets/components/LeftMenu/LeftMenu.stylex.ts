import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

export const styles = stylex.create({
  container: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    zIndex: 6,
    backgroundColor: `rgba(${variables["rgb-slate-700"]}, 0.6)`,
    left: 0,
    direction: "rtl",
    backdropFilter: "blur(4px)",
  },
  closeBtnContainer: {
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
    width: "20%",
    height: "100%",
    backgroundColor: variables["gray-900"],
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "center",
    alignItems: "center",
    padding: "6rem",
    fontSize: "1rem",
    direction: "ltr",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.25rem",
    justifyContent: "center",
  },
  menuItem: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.25s linear",
    ":hover": {
      color: variables["gray-300"],
    },
    gap: "1rem",
  },
  activeMenuItem: {
    color: variables["dynamicColor"],
  },
});
