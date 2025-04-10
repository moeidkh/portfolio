import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};



export const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  title: {
    fontSize: {default:"2.25rem", [breakpoints.md]: "2rem"},
    marginLeft: "-2rem"
  },
  languageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: {default: "row", [breakpoints.lg]: "column"},
    alignItems: "center",
    gap: {default: "2rem", [breakpoints.lg]: "1rem"},
    marginLeft: {default: 0 , [breakpoints.md]: "-2rem"}
  },
  level: {
    color: variables["gray-400"],
  },
  language: {
    width: {default: "20rem", [breakpoints.md]: "15rem"},
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 1rem",
    border: `2px solid ${variables["gray-600"]}`,
    backgroundColor: variables["gray-900"],
    borderRadius: "1rem",
    transition: "all 0.25s linear",
    ":hover": {
      borderColor: variables["dynamicColor"],
    },
    ":hover p": {
      transition: "all 0.25s linear",
      color: variables["dynamicColor"],
    },
    cursor: "pointer",
  },
});
