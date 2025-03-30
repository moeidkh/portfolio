import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

export const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  title: {
    fontSize: "2.25rem",
  },
  languageContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
  },
  level: {
    color: variables["gray-400"],
  },
  language: {
    width: "30rem",
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
