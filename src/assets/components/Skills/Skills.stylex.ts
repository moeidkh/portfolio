import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";
import { color } from "framer-motion";
import { borderColor } from "../../functions/hoverGenerator";

export const styles = stylex.create({
  SkillContainer: {
    // "w- flex flex-col gap-8",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  title: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  },
  skill: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
  },
  skillIconContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem"
  },
  skillIcon: {
    width: "8rem",
    padding: "3rem 2rem",
    transition: "all 0.15s linear",
    border: `2px solid ${variables["gray-500"]}`,
    borderRadius: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "center",
    ":hover": {
      color: variables["dynamicColor"],
      borderColor: variables["dynamicColor"],
    },
    fontSize: "5.625rem",
  },
});
