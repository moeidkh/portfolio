import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

export const styles = stylex.create({
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    marginTop: "3rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "7rem",
    gap: "1.5rem",
    color: variables["gray-400"],
  },
  title: {
    color: variables["white"],
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  dynamicColor: {
    color: variables["dynamicColor"],
  },
  description: {
    textAlign: "justify",
  },
});
