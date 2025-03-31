import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

const spin = stylex.keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const styles = stylex.create({
  container: {
    width: "22.5rem",
    height: "100%",
    borderRadius: "2rem",
    border: `1px solid ${variables["gray-600"]}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1.25rem",
    position: "relative",
    marginLeft: "0.75rem",
    padding: "1.25rem 0.5rem 1.5rem",
  },
  settingsIconContainer: {
    position: "absolute",
    top: "3.5rem",
    left: "-1.25rem",
    fontSize: "1rem",
    backgroundColor: variables["gray-800"],
    padding: "0.65rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
  },
  settingIcon: {
    display: "flex",
    alignItems: "center",
    animationName: spin,
    animationDuration: "1.5s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
  info: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
  },
  name: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  skill: {
    width: "8rem",
    fontSize: "0.825rem",
  },
  react: {
    color: variables["gray-400"],
    fontSize: "0.75rem",
  },
  imageContainer: {
    width: "16rem",
    height: "16rem",
    borderRadius: "1.5rem",
    overflow: "hidden",
  },
  image: {
    width: "100%",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 200,
    color: variables["gray-300"],
  },
  social: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  contactSection: {
    display: "flex",
    gap: "1.5rem",
  },
  contactItem: {
    width: "8rem",
    color: variables["gray-500"],
    border: `2px solid ${variables["gray-500"]}`,
    padding: "0.75rem",
    borderRadius: "1rem",
    cursor: "pointer",
    fontSize: "1.5rem",
    transition: "all 0.25s linear",
    display: "flex",
    alignItems: "center",
    columnGap: "0.5rem",
    ":hover": {
      color: variables["dynamicColor"],
      borderColor: variables["dynamicColor"],
    },
  },
  contactItemText: {
    fontSize: "1rem"
  },
  copyRight: {
    fontWeight: 500,
    color: variables["gray-600"],
  }
});
