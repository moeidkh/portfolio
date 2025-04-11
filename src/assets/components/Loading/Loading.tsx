import { useSelector } from "react-redux";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Loading.stylex";
import { createPortal } from "react-dom";

const Loading = () => {
  const isLoading = useSelector(
    ({ backgroundReducer }) => backgroundReducer.loading
  );
  const { theme } = useSelector(({ ThemeReducer }) => ThemeReducer);

  const children = (
    <div {...stylex.props(styles.loadingContainer, theme)}>
      <div {...stylex.props(styles.loadingDot, styles.loadingDot1)}></div>
      <div {...stylex.props(styles.loadingDot, styles.loadingDot2)}></div>
      <div {...stylex.props(styles.loadingDot, styles.loadingDot3)}></div>
    </div>
  );

  if (!isLoading) return null;
  return createPortal(children, document.getElementById("portal")!);
};

export default Loading;
