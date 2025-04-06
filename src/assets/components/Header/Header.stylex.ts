import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

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
    fontSize: {default: "4.875rem", [breakpoints.sm]: "3.5rem"},
    fontWeight: 300,
  },
  description: {
    color: variables["gray-400"],
    textAlign: "justify",
  },
  AnchorButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: {default: "flex-end", [breakpoints.sm]: "center"},
    paddingRight: {default: "4rem", [breakpoints.sm]: "unset"},
    paddingTop: "2.5rem",
  },
  AnchorButton: {
    width: "fit-content",
    position: "relative",
    display: "flex",
    borderRadius: "50%",
    justifyContent: {default: "flex-end", [breakpoints.sm]: "center"},
    border: `1px solid ${variables["gray-500"]}`,
    padding: "1rem",
    cursor: "pointer",
  },
  image: {
    width: "12rem",
    height: "12rem",
  },
  spinAnimate: {
    animationName: spin,
    animationDuration: "7s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});
