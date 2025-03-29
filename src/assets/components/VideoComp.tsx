import { useSelector } from "react-redux";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  video: {
    position: "fixed",
    zIndex: -5,
    minHeight: "100%",
    minWidth: "100%",
    objectFit: "cover",
    inset: 0,
  },
});

const VideoComp = () => {
  const bgSrc = useSelector(
    ({ backgroundReducer }) => backgroundReducer.backgroundUrl
  );

  return (
    <video src={bgSrc} autoPlay muted loop {...stylex.props(styles.video)} />
  );
};

export default VideoComp;
