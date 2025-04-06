// styles/reset.stylex.js
import * as stylex from "@stylexjs/stylex";

export const resetStyles = stylex.create({
  base: {
    // Box model reset
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: "border-box",

    // Typography reset
    font: "inherit",
    verticalAlign: "baseline",

    // List reset
    listStyle: "none",

    // Form element reset
    appearance: "none",

    // Remove text decoration
    textDecoration: "none",

    // Remove outline (add proper focus styles later)
    outline: "none",
  },
});