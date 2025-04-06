import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const styles = stylex.create({
  timeLineWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "4rem",
    fontWeight: 200,
    marginLeft: {default: "unset", [breakpoints.sm]: "-2rem" }
  },
  timelineContainer: {
    width: "fit-content",
  },
  timeLine: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    ":hover": {
      color: variables["dynamicColor"],
    },
    transition: "all 0.2s linear",
    cursor: "pointer",
  },
  timelineContent: {
    height: "5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  title: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
  companyName: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: variables["gray-500"],
  },
});
