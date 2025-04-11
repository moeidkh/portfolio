import { Provider } from "react-redux";
import store from "./Redux/store";
import * as stylex from "@stylexjs/stylex";
import ResetProvider from "./contexts/StylesResetProvider";
import VideoComp from "./assets/components/VideoComp";
import { variables } from "./Stylex/CssVariables.stylex";
import { StylexUtils } from "./Stylex/styles.stylex";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Suspense, useMemo } from "react";
import ModalManager from "./assets/components/ModalManager/ModalManager";
import MainComponent from "./assets/components/Main/MainComponent";
import Loading from "./assets/components/Loading/Loading";

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

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
    maxWidth: { default: "124rem", [breakpoints.lg]: "100%" },
    backdropFilter: "blur(3px)",
  },
});

function App() {
  const containerStyles = StylexUtils.getStyles(styles.container);
  const mainStyles = StylexUtils.getStyles(styles.main);

  const fallback = useMemo(() => <div>مشکلی به وجود آمده است</div>, []);
  return (
    <Provider store={store}>
      <ResetProvider>
        <Suspense fallback={fallback}>
          <ModalManager />
        </Suspense>
        <Suspense fallback={fallback}>
          <Loading />
        </Suspense>
        <ThemeProvider>
          <div {...containerStyles}>
            <VideoComp />
            <main {...mainStyles}>
              <MainComponent />
            </main>
          </div>
        </ThemeProvider>
      </ResetProvider>
    </Provider>
  );
}

export default App;
