import * as stylex from "@stylexjs/stylex";
import { variables } from "../../../Stylex/CssVariables.stylex";

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

export const styles = stylex.create({
  mainContainer: {
    display: "flex",
    flexDirection: { default: "row", [breakpoints.sm]: "column" },
    alignItems: "center",
    gap: "3rem",
    overflowX: "hidden",
    overflowY: "scroll",
    position: "relative",
  },
  container: {
    width: "100%",
    height: "100vh",
    paddingTop: "2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  labelContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "4rem",
  },
  menuIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem 1.5rem 1.45rem",
    border: `2px solid ${variables["gray-500"]}`,
    borderRadius: "50%",
    ":hover": {
      borderColor: variables["dynamicColor"],
      color: variables["dynamicColor"],
    },
    cursor: "pointer",
    transition: "all 0.25s linear",
    height: "2rem",
    width: "2rem",
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
  HeaderContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    paddingBottom: "4rem",
    position: "relative",
  },
  navbarContainer: {
    position: "fixed",
    right: "4.6rem",
    top: "14rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  labelTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  experienceContainer: {
    display: "flex",
    alignItems: "center",
    gap: "5rem",
    marginBlock: "4rem 2rem",
    // marginBottom: "3rem"
  },
  monthExperience: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "fix-content",
  },
  experienceNumber: {
    color: variables["dynamicColor"],
    fontSize: "5rem",
    fontWeight: 200,
  },
  experienceDescription: {
    color: variables["gray-500"],
    fontSize: "1rem",
    lineHeight: "1.5rem",
    textAlign: "center",
  },
});
