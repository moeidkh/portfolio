import { Provider } from "react-redux";
import store from "./Redux/store";
import * as stylex from "@stylexjs/stylex";
import ResetProvider from "./contexts/StylesResetProvider";
import { resetStyles } from "./Stylex/cssReset.stylex";

import Main from "./assets/components/Main/Main";
import VideoComp from "./assets/components/VideoComp";
import { variables } from "./Stylex/CssVariables.stylex";
import { StylexUtils } from "./Stylex/styles.stylex";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Themes } from "./Stylex/Themes.stylex";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    scrollBehavior: "smooth",
    alignItems: "center",
    backgroundColor: variables["black-90"],
    color: variables.white,
  },
  main: {
    maxWidth: "124rem",
    backdropFilter: "blur(3px)"
  },
});

function App() {
  const containerStyles = StylexUtils.getStyles(styles.container);
  const mainStyles = StylexUtils.getStyles(styles.main);

  return (
    <Provider store={store}>
      <ResetProvider>
        <ThemeProvider>
          <div {...containerStyles}>
            <VideoComp />
            <main {...mainStyles}>
              <Main />
            </main>
          </div>
        </ThemeProvider>
      </ResetProvider>
    </Provider>
  );
}

export default App;
