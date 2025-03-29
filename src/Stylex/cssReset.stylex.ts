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
    fontSize: "100%",
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

// Apply to all elements using a global style
export const globalReset = stylex.create({
  html: {
    lineHeight: 1.15,
    WebkitTextSizeAdjust: "100%",
  },
  body: {
    margin: 0,
  },
  // Add more element-specific resets as needed
});
