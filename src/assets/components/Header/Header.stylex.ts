import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

const spin = stylex.keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const styles = stylex.create({
  HeaderTitle: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  HeaderName: {
    color: variables["dynamicColor"],
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  title: {
    fontSize: "4.875rem",
    fontWeight: 300,
  },
  description: {
    color: variables["gray-400"],
    textAlign: "justify",
  },
  AnchorButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "4rem",
    paddingTop: "2.5rem",
  },
  AnchorButton: {
    width: "fit-content",
    position: "relative",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "flex-end",
    border: `1px solid ${variables["gray-500"]}`,
    padding: "1rem",
    cursor: "pointer",
  },
  spinAnimate: {
    animationName: spin,
    animationDuration: "7s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});
