import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

export const styles = stylex.create({
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
  timeLineWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "4rem",
    fontWeight: 200,
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
    color: variables["gray-500"],
  },
});
