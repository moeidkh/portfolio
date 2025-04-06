import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

export const styles = stylex.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(${variables["rgb-slate-700"]}, 0.6)`,
    position: "absolute",
    top: 0,
    zIndex: 5,
    overflow: "hidden",
    backdropFilter: "blur(4px)",
    direction: "rtl",
  },
});
