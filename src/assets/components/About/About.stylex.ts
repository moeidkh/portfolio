import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

export const styles = stylex.create({
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    marginTop: "3rem",
  },
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
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "7rem",
    gap: "1.5rem",
    color: variables["gray-400"]
  },
  title: {
    color: variables["white"],
    fontSize: "1.5rem",
    lineHeight: "2rem"
  },
  dynamicColor: {
    color: variables["dynamicColor"]
  },
  description: {
    textAlign: "justify"
  }
});
