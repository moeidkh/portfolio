import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

const loadingAnimation = stylex.keyframes({
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(1.5rem)" },
  "100%": { transform: "translateY(0)" },
});

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const styles = stylex.create({
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    height: "100vh",
    width: "100%",
    backgroundColor: variables["black"],
    position: "absolute",
    top: 0,
    zIndex: 5,
    overflow: "hidden",
  },
  loadingDot: {
    width: { default: "3rem", [breakpoints.md]: "2rem" },
    height: { default: "3rem", [breakpoints.md]: "2rem" },
    backgroundColor: variables["dynamicColor"],
    borderRadius: "50%",
  },
  loadingDot1: {
    animationName: loadingAnimation,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationDelay: "0.25s",
  },
  loadingDot2: {
    animationName: loadingAnimation,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationDelay: "0.5s",
  },
  loadingDot3: {
    animationName: loadingAnimation,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    animationDelay: "1s",
  },
});
