import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";
import { borderColor } from "../../functions/hoverGenerator";
import { color } from "framer-motion";

export const styles = stylex.create({
  experienceContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    paddingRight: "2rem",
  },
  title: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
  },
  experienceBox: {
    width: "100%",
    maxWidth: "48rem",
    marginInline: "auto",
  },
  activeMenuItem: {
    color: variables["dynamicColor"],
  },
  swiper: {
    borderRadius: "2rem",
    padding: "1.5rem",
    backgroundColor: `rgba(${variables["rgb-gray-900"]}, 0.7)`,
    color: variables["white"],
    backdropFilter: "blur(10px)",
  },
  swiperSlideContainer: {
    padding: "1.5rem",
  },
  swiperBox: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  swiperTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  swiperDescription: {
    marginTop: "1rem",
    color: variables["gray-300"],
  },
  arrowContainer: {
    display: "flex",
    columnGap: "1rem",
    marginTop: "2rem",
  },
  arrow: {
    width: "3rem",
    height: "3rem",
    padding: "0.5rem",
    fontSize: "2rem",
    fontWeight: 100,
    border: `2px solid ${variables["gray-600"]}`,
    color: variables["gray-600"],
    borderRadius: "50%",
    ":hover": {
      borderColor: variables["dynamicColor"],
      color: variables["dynamicColor"],
    },
    cursor: "pointer",
    transition: "all 0.25s linear",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  swiperCounter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  activeIndex: {
    color: variables["gray-400"],
  },
  completeIndex: {
    color: variables["white"],
  },
});
