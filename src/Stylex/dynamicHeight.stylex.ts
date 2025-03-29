export const dynamicHeight = {
  minHeight: "100dvh",
  "@supports not (height: 100dvh)": {
    minHeight: "100vh",
  },
};
