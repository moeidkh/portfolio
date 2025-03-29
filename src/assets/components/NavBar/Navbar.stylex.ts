import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

export const styles = stylex.create({
  navBarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.25rem",
    border: `2px solid ${variables["gray-600"]}`,
    padding: "1.25rem",
    borderRadius: "2rem",
  },
  navBarItem: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.25s linear",
  },
  activeMenuItem: {
    color: variables["dynamicColor"],
  },
});
