import * as stylex from "@stylexjs/stylex";
import { variables } from "./CssVariables.stylex";

export const globalStyles = stylex.create({
  labelContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "4rem",
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    border: `2px solid ${variables["gray-600"]}`,
    paddingInline: "1rem",
    paddingBlock: "0.5rem",
    fontSize: "0.75rem",
    borderRadius: "2rem",
    fontWeight: 500,
  },
  labelTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dynamicColor: {
    color: variables["dynamicColor"],
  },
});
