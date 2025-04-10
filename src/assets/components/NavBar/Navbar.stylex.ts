import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";
const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const styles = stylex.create({
  navBarContainer: {
    display: { default: "flex", [breakpoints.lg]: "none" },
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
    color: variables["gray-300"],
  },
  activeMenuItem: {
    color: variables["dynamicColor"],
  },
});
